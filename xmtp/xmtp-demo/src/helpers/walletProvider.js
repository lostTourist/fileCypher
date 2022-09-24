import { UpdateSelectedAddressInState } from "../GlobalState";
import { ethers } from "ethers";

export async function ConnectWalletFunc() {
    // This method is run when the user clicks the Connect. It connects the
    // dapp to the user's wallet, and initializes it.
  
    // To connect to the user's wallet, we have to run this method.
    // It returns a promise that will resolve to the user's address.
    const selectedAddress = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log("Connected address is:", selectedAddress);
    UpdateSelectedAddressInState(selectedAddress);
    return selectedAddress;
}

export function GetProvider() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    return provider;
}