import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getContract } from './web3'; // Import the getContract function
import "./admin.css";
const Admin = () => {
    const [contract, setContract] = useState(null);
    const [partyVotes, setPartyVotes] = useState({});
    const [totalVotes, setTotalVotes] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Initialize contract instance
                const contractInstance = await getContract();
                setContract(contractInstance);

                // Fetch total votes
                const totalVotes = await contractInstance.methods.totalVotes().call();
                setTotalVotes(totalVotes);

                // Fetch vote counts for each party
                const partyVotePromises = [];
                for (let i = 1; i <= 3; i++) { // Assuming there are 3 parties (change this according to your contract)
                    partyVotePromises.push(contractInstance.methods.getCandidate(i).call());
                }
                const partyVoteResults = await Promise.all(partyVotePromises);
                const partyVotes = {};
                partyVoteResults.forEach((result, index) => {
                    partyVotes[index + 1] = result.voteCount;
                });
                setPartyVotes(partyVotes);
            } catch (error) {
                console.error('Error fetching data from smart contract:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Layout>
         <div className="admin-container">
    <h2 className="admin-title">Admin Dashboard</h2>
    <div>
        <h3>Party-wise Vote Counts</h3>
        <ul className="party-list">
            {Object.entries(partyVotes).map(([party, votes]) => (
                <li className="party-item" key={party}>
                    <span className="party-name">{`Party ${party}:`}</span>
                    <span className="party-votes">{`${votes} votes`}</span>
                </li>
            ))}
        </ul>
    </div>
    <div className="total-votes">
        <h3>Total Vote Count</h3>
        <p>{`Total votes: ${totalVotes}`}</p>
    </div>
</div>

        </Layout>
    );
};

export default Admin;
