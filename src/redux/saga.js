import { all, takeLatest } from "redux-saga/effects";
import { httpPost } from "../utils/https";
import { agentLogin, staffLogin, studentLogin, universityLogin, userLogin } from "./type";
import { EXCHANGE_URLS, EXCHANGE_URLS_ADMIN, EXCHANGE_URLS_STUDENT } from "../components/URLS";
import cogoToast from "cogo-toast";

// Admin Login-----------------------------------------------------------------------------

function* loginUser({ data, callback }) {
  console.log("console2", data);
  try {
    const response = yield httpPost(`${EXCHANGE_URLS_ADMIN}/login`, data);
    if (response.status === 200) {
      //Here after api call we will get the response which we will send to the above callback
      console.log("console5", response.data);
      callback(response.data);
    }
  } catch (e) {
    console.log(e);
  }
}

// Agent Login------------------------------------------------------------------------------

function* loginAgent({ data, callback }) {
  console.log("console6", data);
  try {
    const response = yield httpPost(`${EXCHANGE_URLS}/login1`, data);
    if (response.status === 200) {
      //Here after api call we will get the response which we will send to the above callback
      console.log("console7", response.data);
      callback(response.data);
    }
  } catch (e) {
    console.log(e);
    cogoToast.error("You Are Not Approved At This Moment");

  }
}

// Staff Login----------------------------------------------------------------------------

function* loginStaff({ data, callback }) {
  console.log("console6", data);
  try {
    const response = yield httpPost(`${EXCHANGE_URLS_ADMIN}/stafflogin/`, data);
    if (response.status === 200) {
      //Here after api call we will get the response which we will send to the above callback
      console.log("console7", response.data);
      callback(response.data);
    }
  } catch (e) {
    console.log(e);
    cogoToast.error("You Are Not Approved At This Moment");

  }
}

// Student Login-------------------------------------------------------------------

function* loginStudent({ data, callback }) {
  console.log("console6", data);
  try {
    const response = yield httpPost(`${EXCHANGE_URLS_STUDENT}/studentlogin`, data);
    if (response.status === 200) {
      //Here after api call we will get the response which we will send to the above callback
      console.log("console7", response.data);
      callback(response.data);
    }
  } catch (e) {
    console.log(e);
    cogoToast.error("You Are Not Approved At This Moment");

  }
}

// University Login-----------------------------------------------------------------

function* loginUniversity({ data, callback }) {
  console.log("console6", data);
  try {
    const response = yield httpPost(`${EXCHANGE_URLS_STUDENT}/unilogin`, data);
    if (response.status === 200) {
      //Here after api call we will get the response which we will send to the above callback
      console.log("console7", response.data);
      callback(response.data);
    }
  } catch (e) {
    console.log(e);
    cogoToast.error("You Are Not Approved At This Moment");

  }
}

function* watchLoginUser() {
  yield takeLatest(userLogin.USER_LOGIN, loginUser);
  yield takeLatest(agentLogin.AGENT_LOGIN, loginAgent);
  yield takeLatest(staffLogin.STAFF_LOGIN, loginStaff);
  yield takeLatest(studentLogin.STUDENT_LOGIN, loginStudent);
  yield takeLatest(universityLogin.UNIVERSITY_LOGIN, loginUniversity);

}

export default function* commonSaga() {
  // Add all the sagas to be run here
  yield all([watchLoginUser()]);
}
