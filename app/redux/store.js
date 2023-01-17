import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers";
import registerReducer from "./user-reducers";

const rootReducre = combineReducers({ registerReducer, userReducer });
export const Store = createStore(rootReducre, applyMiddleware(thunk));

