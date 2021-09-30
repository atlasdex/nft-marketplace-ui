import Web3 from "web3";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    4: "https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213",
    97: "https://data-seed-prebsc-2-s1.binance.org:8545/",
    56: "https://bsc-dataseed.binance.org/",
    42: "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
  },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: 12000,
});

// export const injectedConnector= new InjectedConnector({
//  supportedChainIds: [1, 3, 4, 5, 42, 97, 56],
// }),
