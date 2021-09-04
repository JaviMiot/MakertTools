import React from 'react';
import '../assets/styles/components/DatailResultItem.scss';

const DetailResultItem = (props) => {
  const { label, value } = props;
  return (
    <div className='cost-item'>
      <p>{`${label}:`}</p>
      <span>{`$${value}`}</span>
    </div>
  );
};

export default DetailResultItem;
