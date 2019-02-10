import { all, fork } from 'redux-saga/effects';
import watchLocation from './modules/locationModule';

export default function* rootSaga() {
  yield all([fork(watchLocation)]);
}
