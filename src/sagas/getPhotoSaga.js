import { delay } from 'redux-saga';
import { put, takeEvery, call } from 'redux-saga/effects'
import { getPhoto } from '../api'
import { loadPhotoDataHandle } from "../actions";


function* getPhotoSaga() {
  console.log('getPhotoSaga');
  yield delay(2000);
  let photoData = yield call(getPhoto);
  yield put(loadPhotoDataHandle(photoData))
}


export function* watchGetPhotoSaga() {
  yield takeEvery('GET_PHOTO_DATA_SAGA', getPhotoSaga)
}
