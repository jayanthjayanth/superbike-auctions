import React, { useState, useEffect } from 'react';
import './Auctions.css';

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/auctions');
        const data = await response.json();
        setAuctions(data);
      } catch (error) {
        console.error('Error fetching auctions:', error);
      }
    };
    fetchAuctions();
  }, []);

  return (
    <div className="auctions">
      <h1>Current Auctions</h1>
      <div className="auction-list">
        {auctions.map((auction) => (
          <div key={auction.id} className="auction-card">
            <h2>{auction.name}</h2>
            <p>Starting Bid: ${auction.starting_bid}</p>
            <p>Current Bid: ${auction.current_bid}</p>
            <p>End Date: {auction.end_date}</p>
            <p>Status: {auction.status}</p>
            <p>Remaining Time: {auction.remaining_time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auctions;