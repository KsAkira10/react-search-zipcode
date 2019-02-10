import { all, call, put, takeLatest } from 'redux-saga/effects';
import fecthByZipCode from '../../../services/locationService';
import { ACTION_TYPES } from '../../../store/reducers/locationReducer';

const {
  LOCATION_BY_ZIP_CODE_REQUEST,
  LOCATION_BY_ZIP_CODE_SUCCESS,
  LOCATION_BY_ZIP_CODE_ERROR,
} = ACTION_TYPES;

export function* locationByZipCode({ payload }) {
  try {
    const response = yield call(fecthByZipCode, { ...payload });
    yield put({ type: LOCATION_BY_ZIP_CODE_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: LOCATION_BY_ZIP_CODE_ERROR, payload: err });
  }
}

export default function* watchLocation() {
  yield all([takeLatest(LOCATION_BY_ZIP_CODE_REQUEST, locationByZipCode)]);
}
