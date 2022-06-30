import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./auth.actionTypes"


export const login = (payload) => (dispatch) => {
    dispatch({type:LOGIN_REQUEST});
    return axios.post("https://reqres.in/api/login", payload)
    .then(r=> dispatch({type:LOGIN_SUCCESS, payload: r.data}))
    .catch(err=> dispatch({type:LOGIN_FAILURE}))
}

export const logout = () => ({type:LOGOUT})