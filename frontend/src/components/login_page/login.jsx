import React from 'react'
import './login.css'
import Logo_orange_tan from '../assets/logo_orange_tan.svg'
import Logo_orange from '../assets/logo_orange_black.svg'

const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const loginInfo = {email, password}
        console.log(loginInfo);
    }

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

                <form onSubmit={handleSubmit}>
                    <div className='form'>
                        <label htmlFor="">EMAIL</label><br />
                        <input 
                        type="text"
                        placeholder='Text' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}/><br />

                        <label htmlFor="">PASSWORD</label><br />
                        <input 
                        type="text" 
                        placeholder='Text'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}/><br />
                    </div>

                    <div className='forgot-password-link'>
                        <a href="" id='forgot-password-link'>Forgot password?</a>           {/*TODO (T10): replace with correct link*/}
                    </div>

                    <div className='login-signup-buttons'>
                        <div className='login-button'> 
                            <button>LOGIN</button>
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


export default LoginForm
