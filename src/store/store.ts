import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type StoreState = typeof store.getState;
export type StoreDispatch = typeof store.dispatch;
