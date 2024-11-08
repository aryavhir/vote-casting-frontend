import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import AadharVerify from './components/aadharverify';
import Voter from './components/voter';
import About from './components/about';
import Help from './components/help';
import AdminP from './components/adminPAge'; // Import only once
import UserLogin from './components/UserLogin'; // Check if this import path is correct
import './App.css';

const APP = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aadhar_verify" element={<AadharVerify />} />
        <Route path="/voter" element={<Voter />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/admin" element={<AdminP />} />
      </Routes>
    </Router>
  );
};

export default APP;
