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

export const uploadFileAndGetLink = async (fileToBeSend) => {
  if (fileToBeSend) {
    try {
      let data = {
        file: fileToBeSend,
        upload_preset: "ml_default",
      };

      let result = await fetch(
        "https://api.cloudinary.com/v1_1/dlin8rzcj/upload",
        data
      );
      console.log(result);
      if (result.payload.secure_url) {
        console.log(result.payload.secure_url);
        return result.payload.secure_url;
      }
    } catch (error) {}
  }
};
