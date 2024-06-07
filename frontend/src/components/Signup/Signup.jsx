import React from 'react'
import './Signup.css'

const SignUp = () => {
  return (

    <div className="container">

      <div className="header">
        <div className="logo">[Permuto Logo]</div>
        </div>

        <h2>CREATE ACCOUNT</h2>

      <div className="signup-form">

        <form>
          <label htmlFor="email">EMAIL</label>
          <input type="text" id="email" name="email" placeholder="Text" />
          
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" name="password" placeholder="Text" />

          <label htmlFor="passwordConfirm">CONFIRM PASSWORD</label>
          <input type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Text" />

          
          <div className="button-container">
            <button type="submit" className="signup-btn">SIGN UP</button>
            <button type="button" className="login-instead-btn">LOGIN [ INSTEAD ]</button>
          </div>

        </form>

        <div className="button-divider"></div>

        <div className="signup-as">
          <span>SIGN UP [AS]</span>
        </div>

        <div className="placeholder-container">
          <span className="placeholder">[placeholder]</span>
          <span className="placeholder">[placeholder]</span>
          <span className="placeholder">[placeholder]</span>
          <span className="placeholder">[placeholder]</span>
        </div>


      </div>
      
    </div>
    
  )
}

export default SignUp
