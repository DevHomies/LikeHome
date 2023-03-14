import React, { useState } from 'react';
import axios from 'axios';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rpassword">Re-password:</label>
        <input
          type="text"
          id="rpassword"
          value={rpassword}
          onChange={(e) => setRPassword(e.target.value)}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Registerexample;
