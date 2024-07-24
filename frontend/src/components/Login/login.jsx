import React, { useEffect, useState } from 'react';
import styles from './login.module.css';
import './login.module.css';
import Logo_orange_tan from '../Assets/logoOrangeTan.svg';
import Logo_orange from '../Assets/logoOrangeBlack.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setEmailError('Please enter an email.')
        }   else {
            setEmailError('')
        }

        if (!password) {
            setPasswordError('Please enter a password.')
        }   else {
            setPasswordError('')
        }

        if (email && password) {
            const response = await axios.post('/login', {
                email: email,
                password: password
            })
        }
    }    

    return (
        <div className={styles["login-page"]}>
            <div className={styles['form-side']}>
                <div className={styles["header"]}>  
                    <header className={styles["logo"]}>
                        <img src={Logo_orange} alt="Permuto Logo"/>
                    </header>
        
                    <div className={styles["title"]}>
                        <h1>SIGN IN</h1>
                    </div>

                </div>

                <form onSubmit={handleSubmit}>
                    <div className={styles['form']}>
                        <label htmlFor="">EMAIL</label><br />
                        <input 
                        type="text"
                        placeholder='Text' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>

                        {emailError.length > 0 &&
                            <p className={styles["required-input"]}>
                            <span className={styles["warning-error"]}>&#9888;</span>
                            {emailError} </p>
                        }

                        <label htmlFor="">PASSWORD</label><br />
                        <input 
                        type="text" 
                        placeholder='Text'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}/>

                        {passwordError.length > 0 &&
                            <p className={styles["required-input"]}>
                            <span className={styles["warning-error"]}>&#9888;</span>
                            {passwordError} </p>
                        }

                    </div>

                    <div className={styles['forgot-password']}>
                        <Link to="" className={styles['forgot-password-link']}>Forgot password?</Link>        {/*TODO (T10): replace with path*/}
                    </div>

                    <div className={styles['login-signup-buttons']}>
                        <div className={styles['login-button']}> 
                            <button type="submit">LOGIN</button>
                        </div>

                        <div className={styles['sign-up']}>
                            <Link to="/signup" className={styles['sign-up-link']}> SIGN UP</Link>                           {/*TODO (T10): replace with correct link*/}
                        </div>
                    </div>

                </form>
                
                <div className={styles['login-as-header']}>
                    <hr />
                    <p>LOGIN [AS]</p>
                </div>
                <div className={styles['login-as-body']}>
                    <p>[placeholder]</p>
                    <p>[placeholder]</p>
                    <p>[placeholder]</p>
                    <p>[placeholder]</p>
                </div>
            </div>

            <div className={styles["image-side"]}>
                <img src={Logo_orange_tan} alt="Permuto Skill Exchanging" />
            </div>

        </div>

    )
}

export default Login