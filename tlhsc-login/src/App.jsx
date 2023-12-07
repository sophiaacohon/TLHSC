import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <h3>LOGIN</h3>
      <label>Username</label>
      <input type="text" />
      <br />
      <label>Password</label>
      <input type="password" />
      <br />
      <label>User Type</label>
      <br />
      <input type="radio" name="user_type" id="" />ADMIN
      <input type="radio" name="user_type" id="" />MANAGER
      <input type="radio" name="user_type" id="" />STAFF
      <br />
      <button type="submit">SUBMIT</button>
    </div>
  );
};

export default App;
