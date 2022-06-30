import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { login } from '../Redux/AuthReducer/auth.action'

const Login = () => {

    const [email, setEmail] = useState('eve.holt@reqres.in')
    const [password, setPassword] = useState('cityslicka')
    const {state} = useLocation();


    const dispatch = useDispatch();
    const {isAuth} = useSelector(state=> state.auth)
    const navigate = useNavigate()
    const handleLogin = ()=>{
        var payload ={
            email:email,
            password : password
        }
        if(email && password)
        {
            dispatch(login(payload))
            .then(r=>{
                
                if(r.type === "LOGIN_SUCCESS" )
                {
                    navigate(state.from.pathname || "/", {replace:true});
                }
            })
        }
    }
    // console.log(state.from.pathname)
  return (
    <div>
        <h1>Login</h1>
        <input type="email"  value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter email' />
        <br />
        <input type="password" onChange={(e)=> setPassword(e.target.value)}  value={password}  placeholder='Enter password' />
        <br />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login