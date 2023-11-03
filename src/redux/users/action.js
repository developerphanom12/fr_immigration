export const userDataAction = (data) => {
  return {
    type: "USER_DATA",
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