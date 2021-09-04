import React from 'react';
import { Link } from 'react-router-dom';
//? Imagen exports
import printerLogo from '@icons/3dPrinterLogo.svg';
import laserLogo from '@icons/laserLogo.svg';

//? components
import Tool from '../components/tool';

const Home = () => {
  return (
    <div className='main-container'>
      <section className='tools-containers'>
        <Link to='/printercost'>
          <Tool
            name='3D Printer Cost Calculator'
            image={printerLogo}
            alt='3dPrinterLogo'
          />
        </Link>
        <Tool
          name='Laser Cut Cost Calculator'
          image={laserLogo}
          alt='Laser Machine Logo'
        />
      </section>
    </div>
  );
};

export default Home;
