// src/pages/MyPortfolio.js
import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const MyPortfolio = () => {
  const [portfolio, setPortfolio] = useState([
    { symbol: 'AAPL', name: 'Apple Inc.', shares: 10, price: 150 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 5, price: 2700 },
    // Add more stocks as needed
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Portfolio</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Symbol</th>
              <th className="py-2">Name</th>
              <th className="py-2">Shares</th>
              <th className="py-2">Price</th>
              <th className="py-2">Total Value</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((stock, index) => (
              <tr key={index}>
                <td className="py-2">{stock.symbol}</td>
                <td className="py-2">{stock.name}</td>
                <td className="py-2">{stock.shares}</td>
                <td className="py-2">${stock.price}</td>
                <td className="py-2">${(stock.shares * stock.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
};

export default MyPortfolio;