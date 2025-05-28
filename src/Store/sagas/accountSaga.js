import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_ACCOUNTS_REQUEST ,fetchAccountsSuccess, fetchAccountsFailure} from '../actions/accountAction';

const fetchAccountsApi = (payload) => {
    return axios.post('https://backend-dev.workpace.net/api/account/', payload, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGVzaHRhMTJAbWFpbGluYXRvci5jb20iLCJleHAiOjE3NDY4NjUxODAsImlhdCI6MTc0NDI3MzE4MH0.ht4D-ihTCLYwWYxniwOuR_nYNgaGmkzmDeeIcBRIh1Fzj22C2AvvM9iVBk-1U2FkHmEMZdOcV-CdKB74iy9XAQ`,
      }
    });
  };

function* fetchAccountsSaga(action) {
  try {
    const response = yield call(fetchAccountsApi, action.payload);
    yield put(fetchAccountsSuccess(response.data.data)); // assuming response.data.data contains { records, pageNumber, totalPages }
  } catch (error) {
    yield put(fetchAccountsFailure(error.message));
  }
}

export function* watchFetchAccounts() {
  yield takeLatest(FETCH_ACCOUNTS_REQUEST, fetchAccountsSaga);
}
