import { call, put } from "redux-saga/effects";
import { setRelation } from "../../reducers/facebook";

export function* handleImageCollection(action) {
  try {
    yield put(setRelation());
  } catch (error) {
    console.log(error);
  }
}
