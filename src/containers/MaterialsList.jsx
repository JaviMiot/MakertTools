import React from 'react';
import HeaderSection from '../components/HeaderSection';
import '../assets/styles/containers/MaterialsList.scss';

const MaterialsList = () => {
  return (
    <>
      <HeaderSection
        title='Materials'
        description='Materials use to laser cut'
      />

      <section className='list-material--container'>
        <div className='list-material--header area--header'>
          <h4 className='header-1'>Material</h4>
          <h4 className='header-2'>Size</h4>
          <h4 className='header-3'>Cost</h4>
          <h4 className='header-4'>Supplier</h4>
        </div>
        <div className='list-material--row area--itemsData'>
          <p className='data-1'>
            Acrílico Transparente 3 mm 1.2mx60cm (1/4 de Plancha)
            Distriacrilicos
          </p>
          <p className='data-2'>720000</p>
          <p className='data-3'>$25,75</p>
          <p className='data-4'>Distriacrilicos</p>
        </div>

        <div className='list-material--row area--itemsData'>
          <p className='data-1'>
            Acrílico Transparente 3 mm 1.2mx60cm (1/4 de Plancha)
            Distriacrilicos
          </p>
          <p className='data-2'>720000</p>
          <p className='data-3'>$25,75</p>
          <p className='data-4'>Distriacrilicos</p>
        </div>

        <div className='list-material--row area--itemsData'>
          <p className='data-1'>
            Acrílico Transparente 3 mm 1.2mx60cm (1/4 de Plancha)
            Distriacrilicos
          </p>
          <p className='data-2'>720000</p>
          <p className='data-3'>$25,75</p>
          <p className='data-4'>Distriacrilicos</p>
        </div>
      </section>
    </>
  );
};

export default MaterialsList;
