import React, { useState } from 'react';
import Header from '../Components/common/Header';
import Footer from '../Components/common/Footer';
import SecondMenu from '../Components/SubMenu/SecondMenu';
import WishlistDashboard from '../Components/SubMenu/WishlistDashboard';
import { menuItemsWishlist, displayTablesWishlist, wishlistStocks } from '../Data/dataItems';

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
