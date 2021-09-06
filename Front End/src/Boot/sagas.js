import { call, all } from "redux-saga/effects";
import { ContactActionWatcher } from "../Containers/ContactConatiner/saga";


function* rootSaga() {
  yield all([
    call(ContactActionWatcher),
  ]);
}

export default rootSaga;
