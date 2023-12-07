import { all,fork } from "redux-saga/effects";

import commonSaga from "./saga";

export default function* rootSaga(){
    yield all([fork(commonSaga)])
}