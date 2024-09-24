import React, { useState, useEffect } from 'react';
import AuctionCard from '../components/AuctionCard';
import './Auctions.css';

const Auctions = () => {
  const [auctions, setAuctions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/auctions');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAuctions(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching auctions:', error);
        setError('Failed to fetch auctions. Please try again later.');
        setLoading(false);
      }
    };

    fetchAuctions();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="auctions-container">
      <h1>Current Auctions</h1>
      {auctions.length === 0 ? (
        <p>No auctions available at the moment.</p>
      ) : (
        <div className="auctions-grid">
          {auctions.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Auctions;