import { combineReducers } from "redux";
import uiReducer from "./reducers/uiReducer";
import web3Reducer from "./reducers/web3Reducer";

const rootReducer = combineReducers({
  web3: web3Reducer,
  ui: uiReducer,
});

export default rootReducer;
