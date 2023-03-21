import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

import { FaGoogle, FaFacebookF, FaEnvelope, FaKey } from 'react-icons/fa';

// Import Link for page routing
import { Link } from 'react-router-dom';

export var authlogin = false;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      password
    };
    try {
      const response = await axios.post('/catalog/login/', data);
      // console.log(response.data);
      authlogin = response.data.success
      if (authlogin){
        navigate('/');
      } else{
        setErr(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div className='login-container'>
      <h1>Welcome back.</h1>

      <div className='box'>
        <div>
          <div className='google socials' >
            <FaGoogle />
            <p>Login with Google</p>
          </div>

          <div className='facebook socials' >
            <FaFacebookF />
            <p>Login with Facebook</p>
          </div>

          <div className='login-or'>
            <hr />
            <p>OR</p>
            <hr />
          </div>

          <p className={`err-prompt ${err ? '' : 'hide'}`}>That account does not exist!</p>
          <form onSubmit={handleSubmit} className='login-form'>
            <div className='form-group'>
              <FaEnvelope className='form-icons'/>
              <div className='form-group-inputs'>
                <label htmlFor="username">Email</label>
                <input
                  placeholder='example@gmail.com'
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} 
                />
              </div>
            </div>

            <div className='form-group'>
              <FaKey className='form-icons'/>
              <div className='form-group-inputs'>
                <label htmlFor="password">Password</label>
                <input
                  placeholder='***************'
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className='info-memory'>
              <div>
                <input type="checkbox" name="remember" id='remember' />
                <label htmlFor='remember'>Remember</label>
              </div>

              <p>Forgot Password?</p>
            </div>

            <button type="submit" className='login-button'>Login</button>

            <div className='login-register'>
                <p>Don't have an account yet? <Link to='/register'>Register</Link></p>
            </div>

          
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
