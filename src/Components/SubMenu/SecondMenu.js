import React, { useState } from 'react';
import { menuItemsPortfolio } from '../../Data/dataItems';

const SecondMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <div>
      {Object.keys(menuItemsPortfolio).map((key) => (
        <button
          key={key}
          onClick={() => setActiveMenu(menuItemsPortfolio[key])}
          className={`mr-4 ${activeMenu === menuItemsPortfolio[key] ? 'font-bold' : ''}`}
        >
          {menuItemsPortfolio[key]}
        </button>
      ))}
    </div>
  );
};

export default SecondMenu;