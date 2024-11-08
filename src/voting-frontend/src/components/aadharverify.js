import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './verify.css';

function UserLogin() {
  const [name, setName] = useState('');
  const [voterID, setVoterID] = useState('');
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Define the hardcoded list of voters
    const voters = [
      { name: 'John Doe', voter_id: '123456' },
      { name: 'Jane Smith', voter_id: '789012' },
      { name: 'Alice Johnson', voter_id: '345678' },
      { name: 'Bob Brown', voter_id: '901234' },
      { name: 'Eva Lee', voter_id: '567890' }
    ];

    // Check if the provided voter ID exists in the hardcoded list
    const voter = voters.find((v) => v.voter_id === voterID);
    if (voter && voter.name === name) {
      // If voter ID and name match, navigate to the next page
      navigate('/voter');
    } else {
      // If voter ID or name does not match, display an error message
      setLoginError('Invalid name or voter ID.');
    }
  };

  return (
    <div className="login-container">
      <h2>Voter Verification</h2>
      <label htmlFor="name">Enter Name:</label>
      <input 
        type="text" 
        id="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <label htmlFor="voterID">Enter Voter ID:</label>
      <input 
        type="text" 
        id="voterID" 
        value={voterID} 
        onChange={(e) => setVoterID(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
      {loginError && <p className="error-message">{loginError}</p>}
    </div>
  );
}

export default UserLogin;
