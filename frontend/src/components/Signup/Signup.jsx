import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className='container'>

      <div className="header">
      <div className="text">Create Account</div>

      </div>

      <div className="inputs">
        <div className="text1">Email</div>
        <div className="input">
          <input type="Email" placeholder="Text" />
        </div>

        <div className="text1">Enter password</div>
        <div className="input">
          <input type="Password" placeholder="Text" />
        </div>

        <div className="text1">Confirm password</div>
        <div className="input">         
          <input type="Password" placeholder="Text" />
        </div>

      </div>

      {/* <div className="forgot-password">Sign up <span>Login [instead]</span></div> */}

      <div className="submit-container">

        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>

      </div>
      <div className="underline"></div>
    </div>
    
  )
}

export default Signup