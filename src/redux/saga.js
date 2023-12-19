import { all, takeLatest } from "redux-saga/effects";
import { httpPost } from "../utils/https";
import {  adminLogin, agentLogin, staffLogin, studentLogin, universityLogin } from "./type";
import { EXCHANGE_URLS, EXCHANGE_URLS_ADMIN, EXCHANGE_URLS_STUDENT, EXCHANGE_URLS_UNIVERSITY } from "../components/URLS";
import cogoToast from "cogo-toast";



// Admin Login-----------------------------------------------------------------------------

function* Adminlogin({ data, callback }) {
  console.log("console2", data);
  try {
    const response = yield httpPost(`${EXCHANGE_URLS_ADMIN}/login`, data);
    if (response.status === 200) {
      //Here after api call we will get the response which we will send to the above callback
      callback(response);
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
        localStorage.setItem("token", response?.data?.data?.user?.token);
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
      localStorage.setItem("token", response?.data?.user?.token);

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
      localStorage.setItem("token", response?.data?.user?.token);

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
    const response = yield httpPost(`${EXCHANGE_URLS_UNIVERSITY}/unilogin`, data);
    if (response.status === 200) {
      localStorage.setItem("token", response?.data?.user?.token);

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
  yield takeLatest(adminLogin.ADMIN_LOGIN, Adminlogin);
  yield takeLatest(agentLogin.AGENT_LOGIN, loginAgent);
  yield takeLatest(staffLogin.STAFF_LOGIN, loginStaff);
  yield takeLatest(studentLogin.STUDENT_LOGIN, loginStudent);
  yield takeLatest(universityLogin.UNIVERSITY_LOGIN, loginUniversity);

}

export default function* commonSaga() {
  
  // Add all the sagas to be run here
  yield all([watchLoginUser()]);
}
