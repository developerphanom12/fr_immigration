export const userDataAction = (data) => {
    return {
        type: "USER_DATA",
        payload: data
    }
}
export const userCheckAction = (data) => {
    return {
        type: "USER_CHECK",
        payload: data
    }
}
export const verifyDocs = (verifyDocs)=>{
    return{
        type: "VERIFY_DOCS",
        payload: verifyDocs
    }
}
export const appDetailsAction = (data) => {
    return {
        type: "APP_DETAILS",
        payload: data
    }
}
