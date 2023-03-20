import React, { useState } from 'react';
import axios from 'axios';

import './signup.css';

import { FaGoogle, FaFacebookF } from 'react-icons/fa';

// Import Link for page routing
import { Link } from 'react-router-dom';

function Registerexample() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
      rpassword
      
    };
    try {
      const response = await axios.post('/catalog/register/', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='signup-container'>
      <h1><span>Welcome to</span> LikeHome.</h1>
      
      <div className='box'>
        <div>
          <div className='google socials' >
            <FaGoogle />
            <p>Continue with Google</p>
          </div>

          <div className='facebook socials' >
            <FaFacebookF />
            <p>Continue with Facebook</p>
          </div>

          <div className='login-or'>
            <hr />
            <p>OR</p>
            <hr />
          </div>

          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <div className='form-group-inputs'>
                <label htmlFor="username">Username</label>
                <input
                  placeholder='John Doe'
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className='form-group signup-email'>
              <div className='form-group-inputs'>
                <label htmlFor="email">Email</label>
                <input
                  placeholder='example@gmail.com'
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className='form-group'>
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

            <button type="submit" className='login-button signup-button'>Create Account</button>

            <div className='signup-login'>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registerexample;