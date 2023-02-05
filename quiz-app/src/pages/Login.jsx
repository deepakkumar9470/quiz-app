import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {loginUser} from '../redux/authSlice'

import './login.scss'

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const loginHandler = (e) =>{
        e.preventDefault()
        dispatch(loginUser({email,password}))
        navigate('/')
  }

  return (
    <div className="login_container">
      <form className="login_form" onSubmit={loginHandler}>
        <h3 className="login_title">Login to your account</h3>
        <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)} 
               type="text" 
               placeholder="Enter your email" />
        </div>
        <div className="form-group">
            <label htmlFor="name">Password</label>
            <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)} 
               type="password" />
        </div>
        <button type="submit" className="login_btn">Login</button>
        <hr />
        <Link to="/register" className="nav_link">
          <button className="login_btn">Register</button>
        </Link>
    
    </form>
        
       
   
</div>
  )
}

export default Login