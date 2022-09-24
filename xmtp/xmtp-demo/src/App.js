import logo from './logo.svg';
import './App.css';
import { NoWalletDetected } from './components/NoWalletDetected';
import { useEffect, useState } from 'react';
import { ConnectWallet } from './components/ConnectWallet';
import { ConnectWalletFunc, GetProvider } from './helpers/walletProvider';
import { GetClient, GetConversationList } from './helpers/xmtpProvider';

function App() {

  const [state, setState] = useState();
  const [showHeader, setShowHeader] = useState(false);
  let st = {
    selectedAddress: undefined,
    xmtpClient: undefined,
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
        GetConversationList(resp);
      })

      setState(st);
    });    
  }

  useEffect(() => {
    console.log("====== in use effect!");
    if(state && state.selectedAddress) {
      setShowHeader(true);
    }
  }, [state]);

  if(!state) {
    return (
      <ConnectWallet connectWallet={() => _connectWallet()} />
    );
  }

  if(showHeader) {
    return (
      <p >Wallet Connected: {state.selectedAddress}</p>
    );
  }

}

export default App;
