import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import staff from "./staff";
import customer from "./customer";

export default combineReducers({
  auth,
  alert,
  staff,
  customer
});
