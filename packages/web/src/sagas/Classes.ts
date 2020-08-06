import { takeLatest, call, put } from "redux-saga/effects";
import {
  ISearchClassesAction,
  ISearchClassesPayload,
} from "../actions/Classes";
import { Classes } from "../models/Classes";
import { getQueriedClasses } from "../services/api";

export interface ISearchClassesSagaPayload extends ISearchClassesPayload {
  data?: Classes[];
}
export interface ISearchClassesSagaAction {
  type:
    | "SUCCESS_SEARCH_CLASSES"
    | "LOADING_SEARCH_CLASSES"
    | "ERROR_SEARCH_CLASSES";
  payload?: ISearchClassesSagaPayload;
}
function* searchClasses(action: ISearchClassesAction) {
  yield put<ISearchClassesSagaAction>({
    type: "LOADING_SEARCH_CLASSES",
    payload: { ...action.payload },
  });

  try {
    const { data } = yield call(getQueriedClasses, { ...action.payload });
    yield put<ISearchClassesSagaAction>({
      type: "SUCCESS_SEARCH_CLASSES",
      payload: { ...action.payload, data },
    });
  } catch (error) {
    yield put<ISearchClassesSagaAction>({
      type: "ERROR_SEARCH_CLASSES",
    });
  }
}

export function* watchSearchClasses() {
  yield takeLatest("REQUEST_SEARCH_CLASSES", searchClasses);
}
