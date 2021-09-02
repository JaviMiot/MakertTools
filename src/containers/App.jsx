import React from 'react';
//? Imagen exports
import printerLogo from '@icons/3dPrinterLogo.svg';
import laserLogo from '@icons/laserLogo.svg';

//? components
import Header from '../components/header';
import Tool from '../components/tool';

//? styles
import '../assets/styles/main.scss';

const App = () => {
  return (
    <div className='main-container'>
      <Header />
      <section className='tools-containers'>
        <Tool
          name='3D Printer Cost Calculator'
          image={printerLogo}
          alt='3dPrinterLogo'
        />
        <Tool
          name='Laser Cut Cost Calculator'
          image={laserLogo}
          alt='Laser Machine Logo'
        />
      </section>
    </div>
  );
};

export default App;
