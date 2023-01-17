import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard/DashboardPage';
import Error from './pages/Error/Error';
import LandingPage from './pages/LandingPage/LandingPage';
import './App.css';
import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import Card from './pages/Card';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/card" element={<Card />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;