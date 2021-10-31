import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory }  from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it creates a new user Successfully with Email and Password
                console.log(auth);
                if (auth) {
                    alert("Account Created!")
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className="login">
            <Link to="/">
                <img className='login__logo' src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" />
            </Link>
        <div className="login__container">
            <h1>Sign-In</h1>

        <form>
            <h5>E-mail</h5>
            <input type='text' value={ email } onChange={e => setEmail(e.target.value)} placeholder='Example@email.com'/>
            
            <h5>Password</h5>
            <input type='password' value ={ password }
                onChange={e => setPassword(e.target.value)} placeholder='Password'/>

            <button type='submit' onClick={ signIn } 
                className="login__signInButton">Sign In</button>

            <p>By continuing, 
                you agree to Amazon Clone's Conditions of Use and Privacy Notice.
                Which is a mini project by Group 5 of TE SSJCET
            </p>
            <button onClick={ register } className='login__registerButton'>Create an Account</button>
            <p>By Clicking this button a new account will be created using above Credentials!</p>
        </form>
        </div>
        </div>
    )   
}

export default Login
