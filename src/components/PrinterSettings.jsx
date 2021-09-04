import React from 'react';
import InputSettingNumber from './InputSettingNumber';
import DetailResultItem from './DetailResultItem';
import '../assets/styles/components/PrinterSettings.scss';

const PrinterSettings = () => {
  return (
    <>
      <h2 className='name-tool'>3d Printer Settings</h2>
      <p className='description-tool'>Add information about your 3D printer</p>

      <form className='form-settings' action=''>
        <div className='inputs-containers-settings'>
          <InputSettingNumber label='Pla Cost ($/kg)' id='pla' />
          <InputSettingNumber label='Energy ($/KWh)' id='energy' />
          <InputSettingNumber label='Power printer (KW)' id='power' />
          <DetailResultItem label='Cost Hour Consuption (KW)' value='12.34' />
          <InputSettingNumber label='3D Printer Cost ($)' id='3dPrinterCost' />
          <InputSettingNumber label='Amortization (years)' id='amortization' />
          <InputSettingNumber
            label='Active Days in the year (days)'
            id='activeDays'
          />
          <InputSettingNumber
            label='Hours in the day (hours)'
            id='hoursInOneDay'
          />
          <DetailResultItem label='Amortization Cost ($/h)' value='12.34' />
          <InputSettingNumber label='Fail Percent (%)' id='failPrinter' />
          <InputSettingNumber label='Operator cost ($/h)' id='operatorCost' />
          <InputSettingNumber
            label='Preparation time (h)'
            id='preparationCost'
          />
          <InputSettingNumber
            label='Post Processed time (h)'
            id='postProcessCost'
          />
        </div>

        <input type='submit' className='submit' value='Save' />
      </form>
    </>
  );
};

export default PrinterSettings;