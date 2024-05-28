import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import SecondMenu from '../components/submenu/SecondMenu';
import PortfolioDashboard from '../components/submenu/PortfolioDashboard';
import { menuItemsPortfolio, displayTablesPortfolio, portfolioStocks } from '../data/dataItems';

const MyPortfolio = () => {
  const [activeMenu, setActiveMenu] = useState(menuItemsPortfolio.MY_PORTFOLIO);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Portfolio</h1>
        <SecondMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuItems={menuItemsPortfolio} />
        <PortfolioDashboard activeMenu={activeMenu} displayData={displayTablesPortfolio[activeMenu]} stocks={portfolioStocks} />
      </main>
      <Footer />
    </div>
  );
};

export default MyPortfolio;