import Web3 from "web3";
import { abi as ERC20Abi } from "../abi/ERC20Abi.json";

import * as solanaWeb3 from "@solana/web3.js";

let web3;

export const initializeWeb3 = async () => {
  console.log("initializeWeb3 start");

  // web3 = new Web3(provider);
  let solana = window["solana"];

  let res = await solana.connect({ onlyIfTrusted: true });

  console.log("initializeWeb3 end", {
    solana,
    account: solana.publicKey.toString(),
    connected: solana.isConnected,
    approve: solana.autoApprove,
  });
};

export const fromWei = (value) => {
  return Web3.utils.fromWei(value, "ether");
};
