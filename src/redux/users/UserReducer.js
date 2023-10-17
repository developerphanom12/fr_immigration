const initialState = {
    user : {},
    userCheck : false,
    verifyDocs: false,
    // userAllDetails: {},
    docSubmitted: false,
};

const UserReducer = (state = initialState, action) =>{
    switch(action.type){
        // case "ADD_USER_DETAILS":
        //     return{
        //         ...state,
        //         user: action.payload,
        //     };
        case "VERIFY_USER":
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
        // case "DOC_SUBMITTED":
        //     return{
        //         ...state,
        //         docSubmitted: action.payload
        //     }
        default:
            return state;
    }
}

export default UserReducer;