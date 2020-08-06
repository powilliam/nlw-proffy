import { all } from "redux-saga/effects";
import { watchSearchClasses } from "./sagas/Classes";

export default function* watchSagas() {
  yield all([watchSearchClasses()]);
}
