import React, { useState } from 'react';
import axios from 'axios';

import './signup.css';

import { FaGoogle, FaFacebookF, FaHome } from 'react-icons/fa';

// Import Link for page routing
import { Link, useNavigate } from 'react-router-dom';

function Registerexample() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRPassword] = useState('');

  const [errEmail, setErrEmail] = useState(false);
  const [errPass, setErrPass] = useState(false);
  
  const navigate = useNavigate();
  
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
      if (response.data.success){
        navigate('/login/');
      } else{
        if (password !== rpassword) {
          setErrPass(true);
        } else {
          setErrEmail(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='signup-container'>
      <Link to='/' className='home-btn'><FaHome/></Link>
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

            <p className={`err-prompt ${errEmail ? '' : 'hide'}`}>The email is taken!</p>
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

            <p className={`err-prompt ${errPass ? '' : 'hide'}`}>The passwords do not match!</p>
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

            <div className='form-group signup-rpass'>
              <div className='form-group-inputs'>
                <label htmlFor="rpassword">re-Password</label>
                <input
                  placeholder='***************'
                  type="password"
                  id="rpassword"
                  value={rpassword}
                  onChange={(e) => setRPassword(e.target.value)}
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