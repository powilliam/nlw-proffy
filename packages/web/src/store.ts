import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import watchSagas from "./sagas";
import classes, { IClassesState } from "./reducers/Classes";

const sagaMiddleware = createSagaMiddleware();
const combinedReducers = combineReducers({
  classes,
});

export interface IStore {
  classes: IClassesState;
}

export default createStore(combinedReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchSagas);
