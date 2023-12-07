import { userLogin } from "../type";

const initialState = {
  user: {},
  userCheck: false,
  verifyDocs: false,
  appDetails: {},
  docSubmitted: false,
  role: "",
  data:{}
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case userLogin.USER_LOGIN:
      return { ...state, data: action.data };
    case "USER_DATA":
      return {
        ...state,
        user: action.payload,
      };
    case "USER_CHECK":
      return {
        ...state,
        userCheck: action.payload,
      };
    case "VERIFY_DOCS":
      return {
        ...state,
        verifyDocs: action.payload,
      };
    case "APP_DETAILS":
      return {
        ...state,
        appDetails: action.payload,
      };
    case "SET_USER_CHECK":
      return {
        ...state,
        userCheck: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
