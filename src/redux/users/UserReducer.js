const initialState = {
    user : {},
    userCheck : false,
    verifyDocs: false,
    // userAllDetails: {},
    docSubmitted: false,
    appDetails:{},
};

const UserReducer = (state = initialState, action) =>{
    switch(action.type){
        case "USER_DATA":
            return{
                ...state,
                user: action.payload,
            };
        case "USER_CHECK":
            return{
                ...state,
                userCheck : action.payload,
            }
        case "VERIFY_DOCS":
            return{
                ...state,
                verifyDocs: action.payload,
            }
        // case "USER_ALL_DETAILS":
        //     return{
        //         ...state,
        //         userAllDetails: action.payload
        //     }
        case "APP_DETAILS":
            return{
                ...state,
                appDetails: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;