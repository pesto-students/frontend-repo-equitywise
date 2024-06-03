import React, { useState } from 'react';
import Header from '../Components/common/Header';
import Footer from '../Components/common/Footer';
import SecondMenu from '../Components/SubMenu/SecondMenu';
import PortfolioDashboard2 from '../Components/SubMenu/PortfolioDashboard2';
import PortfolioDashboard from '../Components/SubMenu/PortfolioDashboard';
import { menuItemsPortfolio, displayTablesPortfolio, portfolioStocks } from '../Data/dataItems';

const MyPortfolio = () => {
  const [activeMenu, setActiveMenu] = useState(menuItemsPortfolio.MY_PORTFOLIO);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Portfolio</h1>
        <SecondMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuItems={menuItemsPortfolio} />
        <PortfolioDashboard activeMenu={activeMenu} displayData={displayTablesPortfolio[activeMenu]} stocks={portfolioStocks} />
        <PortfolioDashboard2 activeMenu={activeMenu} displayData={displayTablesPortfolio[activeMenu]} stocks={portfolioStocks} />
      </main>
      <Footer />
    </div>
  );
};

export default MyPortfolio;