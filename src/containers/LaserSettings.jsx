import React from 'react';
import HeaderSection from '../components/HeaderSection';
import InputSettingNumber from '../components/InputSettingNumber';
import DetailResultItem from '../components/DetailResultItem';

const LaserSettings = () => {
  return (
    <>
      <HeaderSection
        title='Laser Settings'
        description='Data of the laser cutting machine'
      />
      <form className='form-settings' action=''>
        <div className='inputs-containers-settings'>
          <InputSettingNumber label='Power (kw)' id='power' />
          <InputSettingNumber label='Voltaje (V)' id='voltaje' />
          <InputSettingNumber
            label='Power consumption of work equipment (kw)'
            id='powerConsumtion'
          />
          <InputSettingNumber
            label='Lighting energy consumption (kw)'
            id='powerLight'
          />
          <DetailResultItem label='Total Power' value='12.34' />
          <InputSettingNumber label='Power Cost (kwh)' id='powerCost' />
          <InputSettingNumber
            label='Power in 1 hour of use (kw)'
            id='powerCostMachine'
          />
        </div>
        <input type='submit' className='submit' value='Save' />
      </form>
    </>
  );
};

export default LaserSettings;
