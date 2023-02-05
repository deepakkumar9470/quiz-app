import React from 'react'
import './header.scss'
import {useSelector} from 'react-redux'

const Header = () => {
  const auth = useSelector((state) => state.auth)
  return (
    <div className='header'>
        <h2>Welcome to Dashboard {auth.name}</h2>
    </div>
  )
}

export default Header