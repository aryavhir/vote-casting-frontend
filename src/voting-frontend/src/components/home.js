// Home.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const navigateToAadharVerify = () => {
    navigate('/aadhar_verify');
  };

  const navigateToVerify = () => {
    navigate('/login');
  };

  return (
    <Layout>
      <div className="home-container">
        <h1 className="home-title">WELCOME TO THE VOTING APP</h1>
        <div className="home-buttons">
          <button onClick={navigateToAadharVerify}>VOTER</button>
          <button onClick={navigateToVerify}>ADMIN</button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
