import { call, put, takeLatest, select,delay } from "redux-saga/effects";
import {
  FETCH_TEMPLATES_REQUEST,
  fetchTemplatesSuccess,
  fetchTemplatesFailure,
  FETCH_TEMPLATES_SUCCESS,
  FETCH_TEMPLATES_FAILURE,
} from "../actions/templateActions";



const fetchTemplatesApi = async ({ visibilityScope, lastId }) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWx1ZSI6eyJpZCI6IjY3YWYxZjQ0NGIxZmUxNjhhZWI4ZmQzMCJ9LCJpYXQiOjE3NDI5NjQ3OTUsImV4cCI6MTc0Mjk5MzU5NX0.Gjm_WtuJWohkhb7iR5g_9tm975g2eIxmCOcG3xB_CZU"); // Replace with valid token
    myHeaders.append("Content-Type", "application/json");
  
    const payload = {
        visibilityScope,
        recordType:"ALL",
        limit: 8,
        viewShared: "SELF_SHARED",
        dir: "FORWARD",
      };
    
      // **Only include `lastid` if it's not the first request**
      if (lastId) {
        payload.lastId = lastId;
      }
    
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(payload),
        redirect: "follow",
      };
  
    const response = await fetch("http://18.171.51.182/template/v1/list", requestOptions);
    if (!response.ok) throw new Error("Failed to fetch data");
  
    return response.json();
  };
  


function* fetchTemplatesSaga(action) {
    try {
      const { visibilityScope, lastId } = action.payload;
      const response = yield call(fetchTemplatesApi, { visibilityScope, lastId });
      const records = response?.data?.records || [];
      const nextLastId = records.length > 0 ? records[records.length - 1]._id : "";
  
      yield put({ type: FETCH_TEMPLATES_SUCCESS, payload: { data: { records }, lastId: nextLastId } });
    } catch (error) {
      yield put({ type: FETCH_TEMPLATES_FAILURE, payload: error.message });
    }
  }
  
  export function* watchFetchTemplates() {
    yield takeLatest(FETCH_TEMPLATES_REQUEST, fetchTemplatesSaga);
  }
