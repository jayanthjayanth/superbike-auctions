import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Auctions.css';

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);
  const [ongoingAuctions, setOngoingAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await axios.get('http://localhost:3001/auctions');
        setAuctions(response.data);
        const ongoingAuctions = response.data.filter((auction) => auction.status === 'ongoing');
        setOngoingAuctions(ongoingAuctions);
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
            <p>Starting Bid: ${auction.startingBid}</p>
            <p>Current Bid: ${auction.currentBid}</p>
            <p>End Date: {auction.endDate}</p>
            <p>Status: {auction.status}</p>
          </div>
        ))}
      </div>
      <h2>Ongoing Auctions</h2>
      <div className="auction-list">
        {ongoingAuctions.map((auction) => (
          <div key={auction.id} className="auction-card">
            <h2>{auction.name}</h2>
            <p>Starting Bid: ${auction.startingBid}</p>
            <p>Current Bid: ${auction.currentBid}</p>
            <p>End Date: {auction.endDate}</p>
            <p>Status: {auction.status}</p>
            <p>Remaining Time: {auction.remainingTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auctions;