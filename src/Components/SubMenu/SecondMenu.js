// src/Components/SubMenu/SecondMenu.js
import React from 'react';
import { menuItemsPortfolio, menuItemsWishlist } from '../../Data/dataItems';

const SecondMenu = ({ activeMenu, setActiveMenu, menuType }) => {
  const menuItems = menuType === 'portfolio' ? menuItemsPortfolio : menuItemsWishlist;

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









//import React from 'react';
//import { menuItemsPortfolio, menuItemsWishlist } from '../../Data/dataItems';

//const SecondMenu = ({ activeMenu, setActiveMenu, isPortfolio }) => {
//  const menuItems = isPortfolio ? menuItemsPortfolio : menuItemsWishlist;

//  return (
//    <div>
//      {Object.keys(menuItems).map((key) => (
//        <button
//          key={key}
//          onClick={() => setActiveMenu(menuItems[key])}
//          className={`mr-4 ${activeMenu === menuItems[key] ? 'font-bold' : ''}`}
//        >
//          {menuItems[key]}
//        </button>
//      ))}
//    </div>
//  );
//};

//export default SecondMenu;
