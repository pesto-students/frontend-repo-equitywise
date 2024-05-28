// src/pages/MarketUpdate.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/common/Header';
import Footer from '../Components/common/Footer';

const MarketUpdate = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get('https://api.example.com/stocks'); // Replace 'https://api.example.com/stocks' with your actual API endpoint
        setStocks(response.data);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Market Update</h1>
        <ul>
          {stocks.map((stock, index) => (
            <li key={index}>
              {stock.symbol} - ${stock.price}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default MarketUpdate;