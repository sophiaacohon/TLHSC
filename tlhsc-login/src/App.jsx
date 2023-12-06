import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
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
      <select name="USER_TYPE" id="">
        <option value="ADMIN">ADMIN</option>
        <option value="MANAGER">MANAGER</option>
        <option value="STAFF">STAFF</option>
      </select>
    </div>
  );
};

export default App;
