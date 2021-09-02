import React from 'react';
import logoApp from '@icons/logoApp.png';

import '../assets/styles/components/header.scss';

const Header = () => {
  return (
    <header>
      <img src={logoApp} alt='logo App' />
      <h1 className='header__title'>MakertTools</h1>
    </header>
  );
};

export default Header;
