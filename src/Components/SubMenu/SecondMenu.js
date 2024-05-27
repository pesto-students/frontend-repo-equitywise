import React, { useState } from 'react';
import { menuItems } from '../../data/dataItems';

const SecondMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <div>
      {Object.keys(menuItems).map((key) => (
        <button
          key={key}
          onClick={() => setActiveMenu(menuItems[key])}
          className={`mr-4 ${activeMenu === menuItems[key] ? 'font-bold' : ''}`}
        >
          {menuItems[key]}
        </button>
      ))}
    </div>
  );
};

export default SecondMenu;