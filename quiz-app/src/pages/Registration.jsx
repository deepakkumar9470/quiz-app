import React,{useState,useEffect} from 'react'

import './registration.scss'
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {registerUser} from '../redux/authSlice'


const Registration = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
 
  }, [])
  
  const signupHandler = (e) =>{
    e.preventDefault()
    dispatch(registerUser({name,email,password}))
    navigate('/')
     
}


  return (
    <div className="from_container">
        <form className="register_form" onSubmit={signupHandler}>
            <h3 className="reg_title">Create an Account</h3>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                   type="text"
                   value={name}
                   onChange={(e) => setName(e.target.value)}    
                   placeholder="Enter your name" />
            </div>
            <div className="form-group">
                <label htmlFor="name">Email</label>
                <input 
                   type="text"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}    
                   placeholder="Enter your email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}    
                   />
            </div>
            <button type="submit" className="reg_button">Register</button>
            <hr />

          <Link to="/login" className="nav_link">
            <button className="reg_button">Login</button>
            </Link>
        </form>
    </div>
  )
}

export default Registration