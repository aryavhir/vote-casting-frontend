// Voter.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getContract } from './web3'; // Import the getContract function
import Layout from "./Layout";
import './voter.css'; // Import the CSS file

const Voter = () => {
  const [selectedParty, setSelectedParty] = useState(''); // Define selectedParty state
  const navigate = useNavigate();

  const handlePartySelection = (e) => {
    setSelectedParty(e.target.value); // Update selectedParty when the user selects a party
  };

  const handleVote = async () => {
    try {
      // Initialize contract instance
      const contract = await getContract();
  
      // Replace 'actual_user_address' with the actual user's Ethereum address
      const actualUserAddress = [
        '0xED41FC8CB9F3807efE531f72A21f49f44AA7119B',
        '0x0C1Beb4a893835CECbF90C4bb4a75e82E14D400A',
        '0x06e9C523a9004a2063Bd11E662b756516adDA8bA',
        '0xbDcC6472589F1D585593dBaE89C345127cB6dC96',
        '0x27972A870E1EB0bECD9Ee50123AA55eDE274fd7B',
        '0xFf4E3787f444119e490Cd529Ce1E95A289D638F55'
      ];
  
      // Call the vote function on the smart contract
      const randomUserAddress = actualUserAddress[Math.floor(Math.random() * actualUserAddress.length)];
      await contract.methods.vote(selectedParty).send({ from: randomUserAddress });
  
      // Navigate to a thank-you page or another route after voting
      navigate('/home');
    } catch (error) {
      console.error('Error submitting vote:', error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <Layout>
      <div className="voter-container">
        <h1 className="voter-title">VOTE CASTING</h1> 
        <div className="party-select select-wrapper">
          <h3>Select Party</h3>                   
          <select value={selectedParty} onChange={handlePartySelection}>    
            <option value="1">Party1</option>  
            <option value="2">Party2</option>    
            <option value="3">Party3</option>
            <option value="0">Party4</option> 
          </select>
        </div>
        <button className="vote-button" onClick={handleVote}>Vote</button>
      </div>
    </Layout>
  );
};

export default Voter;

