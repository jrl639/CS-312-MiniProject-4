import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ onSignup }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/auth/signup', { userId, password, name });
      setMessage(res.data.message);
      onSignup(); // callback to redirect or update state
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={userId} onChange={e => setUserId(e.target.value)} placeholder="User ID" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign Up</button>
      <p>{message}</p>
    </form>
  );
};

export default Signup;