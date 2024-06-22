// src/Components/SubMenu/SecondMenu.js
import React from 'react';
import { menuItemsPortfolio, menuItemsWishlist } from '../../Data/dataItems';

const SecondMenu = ({ activeMenu, setActiveMenu, menuType }) => {
  const menuItems = menuType === 'portfolio' ? menuItemsPortfolio : menuItemsWishlist;

  return (
    <div className="bg-slate-400  p-4 mb-4">
      {Object.keys(menuItems).map((key) => (
        <button
          key={key}
          onClick={() => setActiveMenu(menuItems[key])}
          className={`mr-4 ${activeMenu === menuItems[key] ? 'font-bold text-white underline' : ''}`}
        >
          {menuItems[key]}
        </button>
      ))}
    </div>
  );
};

export default SecondMenu;