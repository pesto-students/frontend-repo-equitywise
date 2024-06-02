// src/components/MarketUpdate.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/common/Header';
import Footer from '../Components/common/Footer';

const MarketUpdate = () => {
  const [symbol, setSymbol] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/market-update', {
        params: { symbol }
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto flex justify-center">
            <div className="tabs flex space-x-4">
              <button className="tab tab-bordered px-4 py-2">NSE</button>
              <button className="tab tab-bordered px-4 py-2">BSE</button>
              <button className="tab tab-bordered px-4 py-2">Global Indices</button>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">Enter the Stock</h1>
          <form onSubmit={handleSubmit} className="mb-4">
            <input 
              type="text" 
              value={symbol} 
              onChange={(e) => setSymbol(e.target.value)} 
              placeholder="Enter stock symbol" 
              required 
              className="border px-4 py-2 mr-4"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Get Data</button>
          </form>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MarketUpdate;
