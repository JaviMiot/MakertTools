import React, { useState } from 'react';
import '../assets/styles/components/ColapseSetups.scss';

const ColapseSetups = (props) => {
  const { title, children } = props;
  const [simbol, setSimbol] = useState('+');
  const [colorSimbol, setColor] = useState('btn-show--blue');

  const handleColapse = (event) => {
    const colapseItem = event.target.parentNode.parentNode.childNodes[1];
    if (colapseItem.classList.contains('show')) {
      colapseItem.classList.remove('show');
      setSimbol('+');
      setColor('btn-show--blue');
    } else {
      colapseItem.classList.add('show');
      setSimbol('-');
      setColor('btn-show--red');
    }
  };

  return (
    <>
      <div className='colapse-container'>
        <div className='colapse-container-title'>
          <h4>{title}</h4>
          <button
            className={`btn-show ${colorSimbol}`}
            type='button'
            onClick={handleColapse}
          >
            {simbol}
          </button>
        </div>
        <div className='colapse-item'>{children}</div>
      </div>
    </>
  );
};

export default ColapseSetups;
