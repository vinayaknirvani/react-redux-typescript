import { combineReducers } from "redux";
import globalReducer from "./GlobalReducer";
import userReducer from "./UserReducer";

const RootReducer = combineReducers({
  global: globalReducer,
  users: userReducer
});

export default RootReducer;
