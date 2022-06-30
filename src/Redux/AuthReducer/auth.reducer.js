import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./auth.actionTypes"

const initState={
    isAuth: false,
    token: '',
    isLoading:false,
    isError:false
}

export const authReducer = (state=initState, {type, payload}) => {
    switch(type)
    {
        case LOGIN_REQUEST:{
            return {
                ...state,
                isAuth:false,
                isLoading:true,
                isError:false
            }
        }
        case LOGIN_SUCCESS:{
            return {
                ...state,
                isAuth:true,
                token:payload,
                isLoading:false,
                isError:false
            }
        }
        case LOGIN_FAILURE:{
            return {
                ...state,
                isAuth:false,
                token:"",
                isLoading:false,
                isError:false

            }
        }
        case LOGOUT:{
            return {
                ...state,
                isAuth:false,
                token:"",
                isLoading:false,
                isError:false
            }
        }
        
        default:{
            return state
        }
    }
}