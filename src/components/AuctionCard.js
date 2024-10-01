import React, { useState, useEffect } from 'react'; // Add imports for useState and useEffect
import { createApi } from 'unsplash-js';
import './AuctionCard.css';

const unsplash = createApi({
  accessKey: 'RAQVmqCojsFO9O5pMdwSeplyid6iv7yaD9huZevxq24',
});

const AuctionCard = ({ auction, onBidClick }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const result = await unsplash.search.getPhotos({
          query: auction.name,
          perPage: 1,
        });
        if (result.response.results.length > 0) {
          setImageUrl(result.response.results[0].urls.small);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [auction.name]);

  return (
    <div className="auction-card">
      <div className="auction-image">
        {imageUrl ? (
          <img src={imageUrl} alt={auction.name} />
        ) : (
          <div className="placeholder-image">No Image Available</div>
        )}
      </div>
      <div className="auction-details">
        <h2>{auction.name}</h2>
        <p className="auction-bid">Starting Bid: ${auction.starting_bid}</p>
        <p className="auction-current-bid">Current Bid: ${auction.current_bid}</p>
        <p className="auction-end-date">End Date: {new Date(auction.end_date).toLocaleString()}</p>
        <p className="auction-status">Status: {auction.status}</p>
        <p className="auction-remaining-time">Remaining Time: {auction.remaining_time}</p>
        <button className="bid-button" onClick={() => onBidClick(auction)}>
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default AuctionCard;