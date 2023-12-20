import {
  adminLogin,
  agentLogin,
  staffLogin,
  studentLogin,
  universityLogin,
} from "../type";

const initialState = {
  user: {},
  userCheck: false,
  appDetails: {},
  role: "",
  data:{}
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminLogin.ADMIN_LOGIN:
      return { ...state, data: action.data  };
    case agentLogin.AGENT_LOGIN:
      return { ...state, data: action.data  };
    case staffLogin.STAFF_LOGIN:
      return { ...state, data: action.data };
    case studentLogin.STUDENT_LOGIN:
      return { ...state, data: action.data };
    case universityLogin.UNIVERSITY_LOGIN:
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

    case "APP_DETAILS":
      return {
        ...state,
        appDetails: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
