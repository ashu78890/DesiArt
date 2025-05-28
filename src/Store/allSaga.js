import { all, fork } from "redux-saga/effects";
import watchFetchData from "./saga";
import { watchFetchTemplates } from "./sagas/templateSaga"
import { watchFetchAccounts } from "./sagas/accountSaga";
export default function* root(){
    yield all([
        fork(watchFetchData),
        fork( watchFetchTemplates),
        fork(watchFetchAccounts)
    ])
}



     





















