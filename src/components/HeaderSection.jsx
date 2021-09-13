import React from 'react';
import '../assets/styles/components/HeaderSection.scss';

const HeaderSection = (props) => {
  const { title, subtitle, description } = props;
  return (
    <>
      <h2 className='name-tool'>{title}</h2>
      <h3 className='name-tool-operation'>{subtitle}</h3>
      {description ? <p className='description-tool'>{description}</p> : null}
    </>
  );
};

export default HeaderSection;
