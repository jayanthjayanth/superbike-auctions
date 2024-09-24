import React from 'react';
import './AuctionCard.css';

const AuctionCard = ({ auction }) => {
  return (
    <div className="auction-card">
      <h2>{auction.name}</h2>
      <p>Starting Bid: ${auction.starting_bid}</p>
      <p>Current Bid: ${auction.current_bid}</p>
      <p>End Date: {auction.end_date}</p>
      <p>Status: {auction.status}</p>
      <p>Remaining Time: {auction.remaining_time}</p>
    </div>
  );
};

export default AuctionCard;