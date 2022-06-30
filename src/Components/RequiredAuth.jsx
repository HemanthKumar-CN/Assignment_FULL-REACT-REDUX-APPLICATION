import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const RequiredAuth = ({children}) => {

    const {isAuth} = useSelector(state=> state.auth)

    const location = useLocation();
    // console.log(location.pathname)
    if(!isAuth)
    {
        return <Navigate to='/login' state={{from: location}} replace/>
    }
    else
    {
        return children
    }

}

export default RequiredAuth