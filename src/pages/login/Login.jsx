import React, { useContext, useRef, useState } from 'react';
import './login.css';
import { loginCalls } from '../../apicalls';
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {

  // const [email,SetEmail] = useState();
  // const [password,SetPassword] = useState();
  const email = useRef();
  const password = useRef();
  const {user, isFetching,error,dispatch} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCalls({email:email.current.value,password:password.current.value},dispatch);
    
    console.log(user);

    // if(email === '' || email.length < 4){
    //   alert('Please provide Email Address');
    //   return false;
    // }else if(password.length < 4 || password === ''){
    //   alert('Please provide Password');
    //   return false;
    // }

  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input placeholder="Email" type='email' required ref={email} className="loginInput" />
            <input placeholder="Password" type='password' required minLength='6' ref={password} className="loginInput" />
            <button className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress style={{color:'white'}} size="20px" /> : "Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? <CircularProgress style={{color:'white'}} size="20px" /> : "Create a New Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login