import React, { Component } from 'react'
import './login.css'
import Logo_orange_tan from '../assets/logo_orange_tan.svg'
import Logo_orange from '../assets/logo_orange_black.svg'

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
      }

      handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
      }

      handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
      }

      handleSubmit = event => {
        alert('An email and password have been submitted to the login page.'); 
        event.preventDefault();
      }

      render(){
        return (
            <div className="login-page">
                <div className='form-side'>
                    <div className="header">  
                        <header className="logo">
                            <img src={Logo_orange} alt="Permuto Logo" id='logo_symbol'/>
                        </header>
            
                        <div className="title">
                            <h1>SIGN IN</h1>
                        </div>

                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <div className='form'>
                            <label htmlFor="">EMAIL</label><br />
                            <input 
                            type="text"
                            placeholder='Text' 
                            value={this.state.email} 
                            onChange={this.handleEmailChange}/><br />

                            <label htmlFor="">PASSWORD</label><br />
                            <input 
                            type="text" 
                            placeholder='Text'
                            value={this.state.password} 
                            onChange={this.handlePasswordChange}/><br />
                        </div>

                        <div className='forgot-password-link'>
                            <a href="" id='forgot-password-link'>Forgot password?</a>           {/*TODO (T10): replace with correct link*/}
                        </div>

                        <div className='login-signup-buttons'>
                            <div className='login-button'>
                                <button type="submit">LOGIN</button>
                            </div>

                            <div className='sign-up-link'>
                                <a href="" id='sign-up-link'>Sign Up</a>                        {/*TODO (T10): replace with correct link*/}
                            </div>
                        </div>

                    </form>
                    
                    <div className='login-as-header'>
                        <hr />
                        <p>LOGIN [AS]</p>
                    </div>
                    <div className='login-as-body'>
                        <p>[placeholder]</p>
                        <p>[placeholder]</p>
                        <p>[placeholder]</p>
                        <p>[placeholder]</p>
                    </div>
                </div>

                <div className="image-side">
                    <img src={Logo_orange_tan} alt="Permuto Skill Exchanging" />
                </div>
    
            </div>

        )
      }
}


export default Form