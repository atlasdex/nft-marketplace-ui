import * as uiTypes from "../types/uiTypes";
import { store } from "../store";

export const showSnackbar = (data) => {
  return (dispatch) => {
    dispatch({ type: uiTypes.SHOW_SNACKBAR, payload: data });
  };
};

export const hideSnackbar = () => {
  return (dispatch) => {
    dispatch({ type: uiTypes.HIDE_SNACKBAR });
  };
};

export const showSnackbarInDeep = (data) => {
  store.dispatch({
    type: uiTypes.SHOW_SNACKBAR_INDEEP,
    payload: data,
  });
};

export const setLoading = (flag) => {
  return (dispatch) => {
    dispatch({ type: uiTypes.SET_LOADING, payload: flag });
  };
};
