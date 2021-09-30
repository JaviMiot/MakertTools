import React from 'react';
import logoApp from '@icons/logoApp.svg';

import '../assets/styles/components/Loading.scss';

const Loading = () => {
  return (
    <div className='loading-container'>
      <div className='circle-rotate'></div>
      <picture>
        <img src={logoApp} alt='Logo App' />
      </picture>
    </div>
  );
};

export default Loading;
