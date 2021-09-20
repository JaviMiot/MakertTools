import React from 'react';
import '../assets/styles/components/InputSettingNumber.scss';

const InputSettingNumber = (props) => {
  const { label, value, id, border, onchange, name } = props;
  return (
    <label
      className={`input-number ${border ? 'border_input' : ''}`}
      htmlFor={id}
    >
      <span>{`${label}:`}</span>
      <input
        id={id}
        type='number'
        min='0'
        defaultValue={value}
        onChange={onchange}
        name={name}
        step='any'
      />
    </label>
  );
};

export default InputSettingNumber;
