import React from 'react';
import Header from '../components/header';
import MenuLateral from './MenuLateral';
import '../assets/styles/containers/Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <Header />
      <div className='app-container'>
        <MenuLateral />
        <div className='main-container'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
