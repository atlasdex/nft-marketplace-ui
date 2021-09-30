import Web3 from 'web3';
import { abi } from './abi/ERC20Abi.json';

var mainneturl = 'https://mainnet.infura.io/v3/49df1e0f0b054abea8cc226e0a07926e'
var web3 = new Web3(mainneturl);

  
  export const getContract = async (tokenAddress)  => {

    let contract;
    //console.log('token address', tokenAddress)
     
    try {
      contract = new web3.eth.Contract(abi, tokenAddress);
      console.log("contract", contract);

      // const [name, symbol, decimals, totalSupply, weiCount] = await Promise.all([
      //   contract.methods.name().call(),
      //   contract.methods.symbol().call(),
      //   contract.methods.decimals().call(),
      //   contract.methods.totalSupply().call(),
      //   web3.utils.fromWei('1', 'ether')
      // ]);
      // console.log(`
      //   name: ${name}
      //   symbol: ${symbol}
      //   decimals: ${decimals}
      //   totalSupply: ${totalSupply}
      //   weiCount: ${weiCount}
      // `)

      return contract;
    } catch (error) {
      console.log('getContract Error', error)
    }

  }
    
  