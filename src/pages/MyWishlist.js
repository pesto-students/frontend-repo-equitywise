import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SecondMenu from '../components/submenu/SecondMenu';
import WishlistDashboard from '../components/submenu/WishlistDashboard';
import { menuItemsWishlist, displayTablesWishlist, wishlistStocks } from '../data/dataItems';

const MyWishlist = () => {
  const [activeMenu, setActiveMenu] = useState(menuItemsWishlist.MY_WISHLIST);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
        <SecondMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuItems={menuItemsWishlist} />
        <WishlistDashboard activeMenu={activeMenu} displayData={displayTablesWishlist[activeMenu]} stocks={wishlistStocks} />
      </main>
      <Footer />
    </div>
  );
};

export default MyWishlist;
