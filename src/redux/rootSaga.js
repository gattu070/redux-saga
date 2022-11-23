import { fork,all } from "redux-saga/effects";
import productSaga from "./productSaga/productSaga";

export default function* rootSaga() {
  yield all([
    fork(productSaga),
  ]);
}