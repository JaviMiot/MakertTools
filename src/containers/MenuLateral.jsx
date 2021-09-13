import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/MenuLateral.scss';

import printerIcon from '../assets/static/icons/3dPrinterLogo.svg';
import printerBlueIcon from '../assets/static/icons/3dPrinterLogoBlue.svg';
import laserIcon from '../assets/static/icons/laserLogo.svg';
import laserBlueIcon from '../assets/static/icons/laserLogoBlue.svg';
import homeIcon from '../assets/static/icons/home.svg';
import homeBlueIcon from '../assets/static/icons/homeBlue.svg';
import boxIcon from '../assets/static/icons/box.png';
import boxBlueIcon from '../assets/static/icons/boxBlue.png';

const MenuLateral = () => {
  const handleItemSelect = (event) => {
    const items = document.querySelectorAll('.item-menu');
    const imagenItems = document.querySelectorAll('.item-menu img');

    let itemSelected;
    let imagenIconSelected;

    items.forEach((item) => {
      item.classList.remove('select--Item');
    });

    imagenItems.forEach((imagen) => {
      imagen.src = imagen.dataset.iconDisable;
    });

    if (event.target.nodeName === 'A') {
      itemSelected = event.target;
      imagenIconSelected = itemSelected.childNodes[0];
    } else {
      itemSelected = event.target.parentNode;
      imagenIconSelected = itemSelected.childNodes[0];
    }
    itemSelected.classList.add('select--Item');
    imagenIconSelected.src = imagenIconSelected.dataset.iconEnable;
  };

  const menuItems = [
    {
      name: 'Home',
      url: '/',
      iconDisable: homeIcon,
      iconEnable: homeBlueIcon,
    },
    {
      name: 'Printer Settings',
      url: '/printersettings',
      iconDisable: printerIcon,
      iconEnable: printerBlueIcon,
    },
    {
      name: 'Laser Settings',
      url: '/lasersettings',
      iconDisable: laserIcon,
      iconEnable: laserBlueIcon,
    },
    {
      name: 'Materials List',
      url: '/materials-list',
      iconDisable: boxIcon,
      iconEnable: boxBlueIcon,
    },
  ];

  return (
    <aside className='lateral-menu-container'>
      <ul className='lateral-menu--items'>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                key={index}
                className='item-menu'
                to={item.url}
                onClick={handleItemSelect}
              >
                <img
                  key={index}
                  src={item.iconDisable}
                  data-icon-disable={item.iconDisable}
                  data-icon-enable={item.iconEnable}
                  alt={item.name}
                />
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default MenuLateral;
