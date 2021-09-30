import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const storeEnhancers = compose(
  applyMiddleware(thunk)
  //window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(rootReducer, storeEnhancers);
