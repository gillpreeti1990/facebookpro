import { takeLatest } from "redux-saga/effects";
import { handleImageCollection, handleImageArray } from "./handler/facebook";
import { GET_NEWARRAY, GET_RELATION } from "../reducers/facebook";

// generator function *
// watcher take help from TYPE to connect TASK and Handler
//first task check GET_IMAGES type in reducer is available if yes then call handleImageCollection in handler
//same as GET_IMAGE_DETAIL watcher check first type and go to handler
export function* watcherSaga() {
  yield takeLatest(GET_RELATION, handleImageCollection);
}
