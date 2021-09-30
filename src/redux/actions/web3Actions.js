import fetch from "../../utils/fetch";
import * as web3Types from "../types/web3Types";
import moment from "moment";

export const setAppLoading = (flag) => {
  console.log("coming here setAppLoading");
  return async (dispatch) => {
    dispatch({ type: web3Types.SET_CHAIN_DATA, payload: { appLoading: flag } });
  };
};

export const setSolanaInstance = (provider) => (dispatch) => {
  dispatch({
    type: web3Types.SET_SOLANA_INSTANCE,
    payload: provider,
  });
};

export const setWalletData = (data) => (dispatch) => {
  dispatch({
    type: web3Types.SET_WALLET_DATA,
    payload: data,
  });
};
