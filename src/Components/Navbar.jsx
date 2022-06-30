import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../Redux/AuthReducer/auth.action'

const Navbar = () => {

  const {isAuth} = useSelector(state=> state.auth)
  const dispatch = useDispatch()
  const handleLogout = ()=> {
    dispatch(logout())
  }


  return (
    <div>
        <button onClick={handleLogout}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  )
}

export default Navbar