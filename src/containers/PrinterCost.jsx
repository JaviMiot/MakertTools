import React from 'react';
import InputSettingNumber from '../components/InputSettingNumber';
import DetailResultItem from '../components/DetailResultItem';
import HeaderSection from '../components/HeaderSection';
import '../assets/styles/components/printerCost.scss';

const PrinterCost = () => {
  return (
    <>
      <HeaderSection title='3d Printer Cost' subtitle='Calculate Cost' />
      <main className='calculator-container'>
        <form className='calculator-printer' action=''>
          <div className='form-inputs-containers'>
            <InputSettingNumber label='Weight (g)' border='true' id='weight' />
            <InputSettingNumber label='Time (min)' border='true' id='time' />
          </div>
          <input className='submit' type='submit' value='Calculate' />
        </form>

        <section className='section-cost-container'>
          <h4 className='section-cost--tittle'>Material Cost</h4>
          <DetailResultItem label='PLA' value='13.00' />
          <DetailResultItem label='Electricity' value='13.00' />
        </section>

        <section className='section-cost-container'>
          <h4 className='section-cost--tittle'>Operation Cost</h4>
          <DetailResultItem label='Preparation' value='13.00' />
          <DetailResultItem label='Post-production' value='13.00' />
        </section>

        <section className='section-cost-container'>
          <DetailResultItem label='Amortization cost' value='13.00' />
          <DetailResultItem label='Fail cost' value='13.00' />
        </section>

        <section className='total-cost'>
          <p className='bold-text'>Total Cost:</p>
          <span className='bold-text'>$1.00</span>
        </section>
      </main>
    </>
  );
};

export default PrinterCost;
