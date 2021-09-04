import React from 'react';
import '../assets/styles/components/InputSettingNumber.scss';

const InputSettingNumber = (props) => {
  const { label, id, border } = props;
  return (
    <label
      className={`input-number ${border ? 'border_input' : ''}`}
      htmlFor={id}
    >
      <span>{`${label}:`}</span>
      <input id={id} type='number' min='0' required />
    </label>
  );
};

export default InputSettingNumber;
