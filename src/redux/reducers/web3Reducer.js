import * as web3Types from "../types/web3Types";

const initialState = {
  web3context: null,
  data: {},

  networkSet: false,
  solanaInstance: null,
  walletData: null,
};

const web3Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case web3Types.STORE_WEB3_CONTEXT:
      return { ...state, web3context: { ...payload } };

    case web3Types.SET_CHAIN_DATA:
      return { ...state, data: { ...state.data, ...payload } };

    case web3Types.SET_NETWORK: {
      return {
        ...state,
        networkSet: true,
      };
    }
    case web3Types.SET_SOLANA_INSTANCE: {
      return {
        ...state,
        solanaInstance: payload,
      };
    }

    case web3Types.SET_WALLET_DATA: {
      return {
        ...state,
        walletData: payload,
      };
    }

    default:
      return state;
  }
};

export default web3Reducer;
