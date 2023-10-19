import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function UserConfir() {


  return (
    <div>
      <button><NavLink to='/register/LogIn' >Sign Up</NavLink> </button>
      <button><NavLink to='/register/SignUp' >Log In</NavLink></button>
    </div>
  )
}

export default UserConfir