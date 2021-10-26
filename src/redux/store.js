import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

export default configureStore({
  reducer: rootReducer,
});
