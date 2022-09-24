import logo from './logo.svg';
import './App.css';
import { NoWalletDetected } from './components/NoWalletDetected';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ConnectWallet } from './components/ConnectWallet';
import { ConnectWalletFunc, GetProvider } from './helpers/walletProvider';
import { GetClient, GetConversationList, GetConversations, GetMessagesForConversation, GetNewConvo, SendMessage } from './helpers/xmtpProvider';

// const ConvoTile = ({ convo }) => (
//   <div className="flex items-start mx-auto mb-4">
//     <Avatar peerAddress={convo.peerAddress} />
//     <div className="ml-2">
//       <div>
//         <AddressPill address={message.senderAddress as string} />
//         <span className="text-sm font-normal place-self-end text-n-300 text-md uppercase">
//           {formatTime(message.sent)}
//         </span>
//       </div>
//       <span className="block text-md px-2 mt-2 text-black font-normal">
//         {message.error ? (
//           `Error: ${message.error?.message}`
//         ) : (
//           <Emoji text={message.content || ''} />
//         )}
//       </span>
//     </div>
//   </div>
// )

function App() {

  const [state, setState] = useState();
  const [showHeader, setShowHeader] = useState(false);
  const [convos, setConvos] = useState();
  const [messages, setMessage] = useState();
  const [msgSent, setMsgSent] = useState(false);
  const [counter, setCounter] = useState(0);
  let st = {
    selectedAddress: undefined,
    xmtpClient: undefined,
  }

  function _refresh() {
    setState(st);
  }

  async function _connectWallet() {
    const walletResp = ConnectWalletFunc().then((resp) => {
      console.log("-====== done here!", resp);  
      var provider = GetProvider();
      console.log("======= provider is: ", provider);      
      const signer = provider.getSigner();
      console.log("======= signer is: ", signer);
      st.selectedAddress = resp[0];
      const xmtpC = GetClient(signer).then(resp => {
        console.log("====== got xmtp client? ", resp);
        st.xmtpClient = resp;
        setState(st);
        // GetConversationList(resp);
      });
    });    
  }

  useEffect(() => {
    console.log("====== in use effect!");
    if(state && state.selectedAddress) {
      setShowHeader(true);
    }
    if(state && state.xmtpClient) {
      GetConversations(state.xmtpClient).then(resp => {
        console.log("====== conversations resp: ", resp);
        setConvos(resp);
      });
      setConvos(null);
    }
  }, [state]);

  useEffect(() => {
    console.log("===== this is from convos");
    if(convos) {
      GetMessagesForConversation(convos[0]).then(resp => {
          console.log("======== messages are: ", resp);
          setMessage(resp);
      });
    }
  }, [convos]);

  async function _sendHelloWorld() {
    GetNewConvo(state.xmtpClient, "0xf4267F20B463421D2cF3db534491b7920F79Ac4F").then(resp => {
      console.log("===== conversation with toAddr is: ", resp);

      let msg = "Hello World From Demo with Counter" + (counter + 1);
      SendMessage(resp, msg).then(resp2 => {
        console.log("===== send message response: ", resp2);
        setMsgSent(true);
        let c = counter;
        setCounter(c++);
      });

    });
  }

  if(!state) {
    return (
      <ConnectWallet connectWallet={() => _connectWallet()} />
    );
  }

  if(showHeader) {

    if(convos && messages && msgSent) {
      return (
        <div>
          <p>Wallet Connected: {state.selectedAddress}</p>
          <p>First Conversion to: {convos[0].peerAddress}</p>
          <p>First  Messages to above address: {messages[0].content}</p>
          <Button onClick={() => _sendHelloWorld()}>Send Hello World!</Button>
          <p>Demo Message has been sent!! {counter}</p>
        </div>
      );
    }

    if(convos && messages) {
      return (
        <div>
          <p>Wallet Connected: {state.selectedAddress}</p>
          <p>First Conversion to: {convos[0].peerAddress}</p>
          <p>First  Messages to above address: {messages[0].content}</p>
          <Button onClick={() => _sendHelloWorld()}>Send Hello World!</Button>
        </div>
      );
    }

    if(convos) {
      return (
        <div>
          <p>Wallet Connected: {state.selectedAddress}</p>
          <p>First Conversation to: {convos[0].peerAddress}</p>
        </div>
      );
    }

    return (
      <div>
        <p>Wallet Connected: {state.selectedAddress}</p>
      </div>
    );
  }

}

export default App;
