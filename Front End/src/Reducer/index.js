import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import ContactReducer from "../Containers/ContactConatiner/reducer";


const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    ContactReducer

  });

export default createRootReducer;
