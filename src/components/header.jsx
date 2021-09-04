import React from 'react';
import { Link } from 'react-router-dom';
import logoApp from '@icons/logoApp.png';
import '../assets/styles/components/header.scss';

const Header = () => {
  return (
    <header>
      <Link className='title-container' to='/'>
        <img src={logoApp} alt='logo App' />
        <h1 className='header__title'>MakertTools</h1>
      </Link>
    </header>
  );
};

export default Header;
