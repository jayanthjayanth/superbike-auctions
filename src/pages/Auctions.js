import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import AuctionCard from '../components/AuctionCard';
import './Auctions.css';

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);
  const [error, setError] = useState(null);
  const { auth, placeBid } = useContext(AuthContext);
  const [showBidForm, setShowBidForm] = useState(false);
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [bidAmount, setBidAmount] = useState(0);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/auctions');
        const data = await response.json();
        setAuctions(data);
      } catch (error) {
        console.error('Error fetching auctions:', error);
        setError('Failed to fetch auctions. Please try again later.');
      }
    };

    fetchAuctions();
  }, []);

  const handleBidClick = (auction) => {
    setSelectedAuction(auction);
    setShowBidForm(true);
  };

  const handleBidSubmit = async () => {
    try {
      const result = await placeBid(selectedAuction.id, bidAmount);
      if (result.success) {
        // Bid placed successfully, update the auction data
        setAuctions(
          auctions.map((auction) =>
            auction.id === selectedAuction.id
              ? { ...auction, current_bid: result.currentBid }
              : auction
          )
        );
        setShowBidForm(false);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error placing bid:', error);
      alert('An error occurred while placing the bid.');
    }
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="auctions-container">
      <h1>Current Auctions</h1>
      <div className="auctions-grid">
        {auctions.map((auction) => (
          <AuctionCard key={auction.id} auction={auction} onBidClick={handleBidClick} />
        ))}
      </div>

      {showBidForm && (
        <div className="bid-modal">
          <div className="bid-form">
            <h2>Place a Bid</h2>
            <p>Auction: {selectedAuction.name}</p>
            <p>Current Bid: ${selectedAuction.current_bid}</p>
            <label>
              Bid Amount:
              <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
              />
            </label>
            <button onClick={handleBidSubmit}>Place Bid</button>
            <button onClick={() => setShowBidForm(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auctions;