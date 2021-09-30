import axios from "axios";
import { getContract } from "../getContract";
import { utils } from "ethers";

export const getDecimal = async (tokenAddress) => {
  try {
    const contract = await getContract(tokenAddress);
    const decimals = await contract.methods.decimals().call();
    const parsedDecs = await utils.formatUnits("10000000", decimals);
    //console.log(parsedDecs);
    return [decimals, parsedDecs];
  } catch (e) {
    console.log(e);
  }
};

export const getName = async (tokenAddress) => {
  try {
    const contract = await getContract(tokenAddress);
    const name = await contract.methods.name().call();
    //console.log(name);
    return name;
  } catch (e) {
    console.log(e);
  }
};

export const getSymbol = async (tokenAddress) => {
  try {
    const contract = await getContract(tokenAddress);
    const symbol = await contract.methods.symbol().call();
    return symbol;
  } catch (e) {
    console.log(e);
  }
};

export const getWei = async (tokenAddress) => {
  try {
    const contract = await getContract(tokenAddress);
    const symbol = await contract.methods.totalSupply().call();
    console.log(symbol);
    return symbol;
  } catch (e) {
    console.log(e);
  }
};

//get token logo
export const getTokenLogo = async (tokenAddress) => {
  console.log(tokenAddress);
  const unknownLogo =
    "https://gateway.pinata.cloud/ipfs/QmNX2QerTxTm1RThD7Dc9X5uS9VFnQxmMotaMFhK5GYbBk";
  try {
    const logoUrl = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${tokenAddress}/logo.png`;
    const res = await axios.get(logoUrl);
    if (res) {
      return logoUrl;
    } else {
      return unknownLogo;
    }
  } catch (error) {
    console.log(error);
    return unknownLogo;
  }
};
