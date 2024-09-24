import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuctionContext = createContext();

const AuctionProvider = ({ children }) => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await axios.get('https://your-api.com/auctions');
        setAuctions(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAuctions();
  }, []);

  return (
    <AuctionContext.Provider value={{ auctions }}>
      {children}
    </AuctionContext.Provider>
  );
};

export { AuctionProvider, AuctionContext };