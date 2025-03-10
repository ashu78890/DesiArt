import { call, takeEvery,put, takeLatest } from "redux-saga/effects";
import { FETCH_REQUEST_ACTION, fetchFailureAction, fetchSucsesstAction } from "./action";
// import axios from "axios";


function* fetchCount () {   
  try{
    console.log('Saga: Starting API call...');
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
    // const response = yield call(getcountapi)
    if (response.ok) {
        const data = yield response.json(); 
        yield put(fetchSucsesstAction(data));
    }
  }catch(error){
    yield put(fetchFailureAction(error))
  }   
}

 export default function* watchFetchData(){
    console.log('watch Starting API call...');
 yield takeLatest(FETCH_REQUEST_ACTION,fetchCount)
}