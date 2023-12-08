import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';

import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import Analytics from './components/admin/Analytics';
import Inventory from './components/admin/Inventory';
import Transactions from './components/admin/Transactions';
import Employees from './components/admin/Employees';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App
