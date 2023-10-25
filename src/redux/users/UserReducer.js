const initialState = {
  user: {},
  userCheck: false,
  verifyDocs: false,
  appDetails: {},
  docSubmitted: false,
  role: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case "USER_DETAILS":
      return {
        ...state,
        appDetails: action.payload,
      };
      case 'SET_USER_CHECK':
        return {
          ...state,
          userCheck: action.payload,
        };
    default:
      return state;
  }
};

export default UserReducer;
