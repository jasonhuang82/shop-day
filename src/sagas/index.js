import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'
import {watchGetPhotoSaga} from "./getPhotoSaga";

export default function* rootSaga() {
  yield all([
    watchGetPhotoSaga()
  ])
}