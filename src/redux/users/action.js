import { adminLogin, agentLogin, staffLogin, studentLogin, universityLogin } from "../type";

export const userDataAction = (data) => {
  return {
    type: "USER_DATA",
    payload: data,
  };
};
export const loaderAction = (data) => {
  return {
    type: "LOADING_DATA",
    payload: data,
  };
};
export const userCheckAction = (data) => {
  return {
    type: "USER_CHECK",
    payload: data,
  };
};
export const staffCheckAction = (data) =>{
  return{
    type: "STAFF_CHECK",
    payload:data,
  }
}
export const verifyDocs = (verifyDocs) => {
  return {
    type: "VERIFY_DOCS",
    payload: verifyDocs,
  };
};
export const appDetailsAction = (data) => {
  return {
    type: "APP_DETAILS",
    payload: data,
  };
};
export const UserDetails = (data) => {
  return {
    type: "USER_DETAILS",
    payload: data,
  };
};
export const setUserCheck = (value) => ({
  type: 'SET_USER_CHECK',
  payload:value, 
});

export const adminLoginAction = (data, callback) => ({
  type: adminLogin.ADMIN_LOGIN,
  data,
  callback,
});
export const agentLoginAction = (data, callback) => ({
  type: agentLogin.AGENT_LOGIN,
  data,
  callback,
});
export const staffLoginAction = (data, callback) => ({
  type: staffLogin.STAFF_LOGIN,
  data,
  callback,
});
export const universityLoginAction = (data, callback) => ({
  type: universityLogin.UNIVERSITY_LOGIN,
  data,
  callback,
});
export const studentLoginAction = (data, callback) => ({
  type: studentLogin.STUDENT_LOGIN,
  data,
  callback,
});
