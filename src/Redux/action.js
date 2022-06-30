import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, UPDATE_BOOKS } from "./actionTypes"
import axios from 'axios';

export const getBooks = (params) => dispatch => {
    dispatch({type:GET_BOOKS_REQUEST})
    axios.get(`http://localhost:8080/books`,params)
    .then(r=> dispatch({type: GET_BOOKS_SUCCESS, payload: r.data}))
    .catch(err=> dispatch({type: GET_BOOKS_FAILURE}))
}


export const updateBooks = (id, data) => dispatch => {
    axios.patch(`http://localhost:8080/books/${id}`, data)
    .then(r=> dispatch({type: UPDATE_BOOKS}))
    .catch(err=> console.log(err))
}