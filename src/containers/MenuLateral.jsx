import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/MenuLateral.scss';

const MenuLateral = () => {
  return (
    <aside className='lateral-menu-container'>
      <ul className='lateral-menu--items'>
        <li>
          <Link className='item-menu' to='/'>
            <img src='' alt='' />
            Home
          </Link>
        </li>
        <li>
          <Link className='item-menu' to='/printersettings'>
            Printer Settings
          </Link>
        </li>
        <li>
          <Link className='item-menu' to='/'>
            Laser Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MenuLateral;
