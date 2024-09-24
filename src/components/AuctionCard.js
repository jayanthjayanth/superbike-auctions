import React from 'react';
import './AuctionCard.css';

const AuctionCard = ({ auction }) => {
  return (
    <div className="auction-card">
      <h2>{auction.name}</h2>
      <p>Starting Bid: ${auction.startingBid}</p>
      <p>Current Bid: ${auction.currentBid}</p>
      <p>End Date: {auction.endDate}</p>
    </div>
  );
};

export default AuctionCard;