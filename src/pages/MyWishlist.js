import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const MyWishlist = () => {
  const [wishlist, setWishlist] = useState([
    { symbol: 'TSLA', name: 'Tesla Inc.', targetPrice: 800 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', targetPrice: 3500 },
    // Add more stocks as needed
  ]);

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Symbol</th>
              <th className="py-2">Name</th>
              <th className="py-2">Target Price</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((stock, index) => (
              <tr key={index}>
                <td className="py-2">{stock.symbol}</td>
                <td className="py-2">{stock.name}</td>
                <td className="py-2">${stock.targetPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default MyWishlist;