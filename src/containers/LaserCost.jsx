import React from 'react';
import HeaderSection from '../components/HeaderSection';

import '../assets/styles/components/LaserCost.scss';
import InputSettingNumber from '../components/InputSettingNumber';
import DetailResultItem from '../components/DetailResultItem';
import ColapseSetups from '../components/ColapseSetups';

const LaserCost = () => {
  return (
    <>
      <HeaderSection title='Laser Cut' subtitle='Calculate Cost' />
      <main className='calculator-container'>
        <ColapseSetups title='Cost Setup'>
          <InputSettingNumber label='Cost setup Machine' />
        </ColapseSetups>
        <ColapseSetups title='Cost Design'>
          <InputSettingNumber label='Desing Model' />
          <InputSettingNumber label='Generate Plans' />
          <InputSettingNumber label='Check Plans/Vectors' />
          <InputSettingNumber label='Ensamble' />
        </ColapseSetups>
        <ColapseSetups title='Cost Material'>
          <InputSettingNumber label='Select Material' />
          <InputSettingNumber label='Dimensions of material (mm^2)' />
          <InputSettingNumber label='Check Plans/Vectors' />
          <InputSettingNumber label='Ensamble' />
          <DetailResultItem label='Total Cost Material' value='12.34' />
        </ColapseSetups>
        <ColapseSetups title='Cost Laser Cut'>
          <InputSettingNumber label='Time (minutes)' />
          <DetailResultItem label='Total Cost Laser Cut' value='12.34' />
        </ColapseSetups>
        <ColapseSetups title='Other Costs'>
          <InputSettingNumber label='Percent Fails (%)' />
        </ColapseSetups>

        <section>
          <DetailResultItem label='Sub Total' value='12.34' />
          <DetailResultItem label='Iva 12%' value='12.34' />
        </section>
        <section className='total-cost'>
          <p className='bold-text'>Total Cost:</p>
          <span className='bold-text'>$1.00</span>
        </section>
      </main>
    </>
  );
};

export default LaserCost;
