
import { all ,takeLatest} from "redux-saga/effects";
import { httpPost} from "../utils/https"
import { userLogin } from "./type";
import { EXCHANGE_URLS_ADMIN } from "../components/URLS";

// User Login

function* loginUser({data, callback}){
    console.log("console2",data)
    try{
        const response = yield httpPost(`${EXCHANGE_URLS_ADMIN}/login`, data);
        if(response.status === 200){
            //Here after api call we will get the response which we will send to the above callback
            console.log("console5",response.data)
            callback(response.data)
        }

    }catch(e){
        console.log(e)
    }
}

function* watchLoginUser() {
    yield takeLatest(userLogin.USER_LOGIN, loginUser);
  }
  
  export default function* commonSaga() {
    // Add all the sagas to be run here
    yield all([watchLoginUser()]);
  }

