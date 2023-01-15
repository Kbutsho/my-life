import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Error from './pages/Error/Error';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;