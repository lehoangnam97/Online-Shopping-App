const defaultLoginState = {
    user: null,
    isLogginIn: false
}

import {
    USER_LOGGING_IN, USER_LOGIN, USER_LOGOUT
} from "../actionTypes";

const loginReducer = (state = defaultLoginState, action) =>{
    if(action.type === USER_LOGIN){
        return {user: action.user, loggingIn: false}
    }

    if(action.type === USER_LOGGING_IN){
        return {user: null, loggingIn: true}
    }

    if(action.type === USER_LOGOUT){
        return {user: null, loggingIn: false}
    }

    return state
}

export default loginReducer