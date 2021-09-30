import * as uiTypes from "../types/uiTypes";

const initialState = {
  snackbar: {
    open: false,
    severity: "success",
    message: "",
    transactionHash: "",
  },

  loading: false,
};

const uiReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case uiTypes.TOGGLE_THEME:
      const theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", theme);
      return { ...state, theme };
    case uiTypes.LOADING:
      return { ...state, loading: { ...state.loading, ...payload } };
    case uiTypes.SHOW_SNACKBAR:
      return {
        ...state,
        snackbar: { open: true, transactionHash: "", ...payload },
      };
    case uiTypes.HIDE_SNACKBAR:
      return { ...state, snackbar: { open: false, transactionHash: "" } };
    case uiTypes.SHOW_SNACKBAR_INDEEP:
      return { ...state, snackbar: { open: true, ...payload } };
    case uiTypes.INITIALLY_RENDERED:
      return { ...state, initialRender: false };
    case uiTypes.SHOW_MODAL:
      return { ...state, modal: payload };

    case uiTypes.SET_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};

export default uiReducer;
