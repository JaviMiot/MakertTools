import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import InputSettingNumber from '../components/InputSettingNumber';
import DetailResultItem from '../components/DetailResultItem';
import HeaderSection from '../components/HeaderSection';
import '../assets/styles/components/PrinterSettings.scss';

const PrinterSettings = () => {
  const url = 'https://api-makertools.herokuapp.com/';
  const settingsPrinter = 'printer/settings';
  const [printerData, setDataSettings] = useState({});

  useEffect(() => {
    fetch(`${url}${settingsPrinter}`)
      .then((response) => response.json())
      .then((data) => {
        setDataSettings(data);
      });
  }, []);

  const onChangeHandler = (event) => {
    setDataSettings({
      ...printerData,
      Settings: {
        ...printerData.Settings,
        [event.target.name]: Number(event.target.value),
      },
    });
  };

  function saveData() {
    fetch(`${url}${settingsPrinter}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(printerData),
    })
      .then((response) => response.json())
      .then((data) => Number(data.Updated))
      .then((updated) => {
        console.log(typeof updated);
        if (Number(updated) > 0) {
          swal({ title: 'Data was Updated', icon: 'success' });
        } else {
          swal({ title: "Data wasn't Updated", icon: 'error' });
        }
      });
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(printerData);
    saveData();
  };

  return Object.entries(printerData).length <= 0 ? (
    <h1>Loading ...</h1>
  ) : (
    <>
      <HeaderSection
        title='3d Printer Settings'
        description='Add information about your 3D printer'
      />

      <form className='form-settings' onSubmit={onSubmitHandler}>
        <div className='inputs-containers-settings'>
          <InputSettingNumber
            label='Pla Cost ($/kg)'
            id='pla'
            value={printerData.Settings.pla_cost}
            onchange={onChangeHandler}
            name='pla_cost'
          />
          <InputSettingNumber
            label='Energy ($/KWh)'
            id='energy'
            value={printerData.Settings.energy}
            onchange={onChangeHandler}
            name='energy'
          />
          <InputSettingNumber
            label='Power printer (KW)'
            id='power'
            value={printerData.Settings.power_printer}
            onchange={onChangeHandler}
            name='power_printer'
          />
          <DetailResultItem label='Cost Hour Consuption (KW)' value='12.34' />
          <InputSettingNumber
            label='3D Printer Cost ($)'
            id='3dPrinterCost'
            value={printerData.Settings.printer_cost}
            onchange={onChangeHandler}
            name='printer_cost'
          />
          <InputSettingNumber
            label='Amortization (years)'
            id='amortization'
            value={printerData.Settings.amortization}
            onchange={onChangeHandler}
            name='amortization'
          />
          <InputSettingNumber
            label='Active Days in the year (days)'
            id='activeDays'
            value={printerData.Settings.active_days}
            onchange={onChangeHandler}
            name='active_days'
          />
          <InputSettingNumber
            label='Hours in the day (hours)'
            id='hoursInOneDay'
            value={printerData.Settings.hours_in_day}
            onchange={onChangeHandler}
            name='hours_in_day'
          />
          <DetailResultItem label='Amortization Cost ($/h)' value='12.34' />
          <InputSettingNumber
            label='Fail Percent (%)'
            id='failPrinter'
            value={printerData.Settings.fail_percent}
            onchange={onChangeHandler}
            name='fail_percent'
          />
          <InputSettingNumber
            label='Operator cost ($/h)'
            id='operatorCost'
            value={printerData.Settings.operator_cost_by_hour}
            onchange={onChangeHandler}
            name='operator_cost_by_hour'
          />
          <InputSettingNumber
            label='Preparation time (h)'
            id='preparationCost'
            value={printerData.Settings.preparation_time}
            onchange={onChangeHandler}
            name='preparation_time'
          />
          <InputSettingNumber
            label='Post Processed time (h)'
            id='postProcessCost'
            value={printerData.Settings.post_processed_time}
            onchange={onChangeHandler}
            name='post_processed_time'
          />
        </div>

        <input type='submit' className='submit' value='Save' />
      </form>
    </>
  );
};

export default PrinterSettings;
