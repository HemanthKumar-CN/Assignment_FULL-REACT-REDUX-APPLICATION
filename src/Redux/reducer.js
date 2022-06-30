import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionTypes"

const initState={
    books:[],
    isLoading:false,
    isError: false
}



export const reducer =(state = initState, {type, payload})=>
{
    switch(type)
    {   
        case GET_BOOKS_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError: false
            }
        }
        case GET_BOOKS_SUCCESS:{
            return {
                ...state,
                books:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_BOOKS_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default: 
            return state
        
    }
}