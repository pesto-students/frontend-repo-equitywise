// src/Components/Dashboard.js
import React, { useState } from 'react';
import SecondMenu from './SubMenu/SecondMenu';
import DashboardPortfolio from './SubMenu/DashboardPortfolio';
import DashboardWishlist from './SubMenu/DashboardWishlist';

const Dashboard = () => {
  const [isPortfolio, setIsPortfolio] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div>
      <SecondMenu
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        isPortfolio={isPortfolio}
        setIsPortfolio={setIsPortfolio}
      />
      {isPortfolio ? (
        <DashboardPortfolio activeMenu={activeMenu} />
      ) : (
        <DashboardWishlist activeMenu={activeMenu} />
      )}
    </div>
  );
};

export default Dashboard;
