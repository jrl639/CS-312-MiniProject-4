import React, { useState } from 'react';
import axios from 'axios';

const Signin = ({ onSignin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/auth/signin', { userId, password });
      setMessage(res.data.message);
      onSignin(res.data.user); // callback to set logged-in user
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={userId} onChange={e => setUserId(e.target.value)} placeholder="User ID" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign In</button>
      <p>{message}</p>
    </form>
  );
};

export default Signin;
