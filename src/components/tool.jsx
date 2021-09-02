import React from 'react';
import '../assets/styles/components/tool.scss';

const Tool = (props) => {
  const { name, image, alt } = props;

  return (
    <button className='btn-tools' type='button'>
      <div className='btn-tools__imagen-container'>
        <img src={image} alt={alt} />
        <h3>{name}</h3>
      </div>
    </button>
  );
};

export default Tool;
