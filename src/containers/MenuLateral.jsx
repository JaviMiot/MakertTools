import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/containers/MenuLateral.scss';

const MenuLateral = (props) => {
  const { menuItems } = props;
  const linkRefs = menuItems.map((item) => useRef());

  const getImgLinkRef = (event) => {
    const index = event.target.dataset.key;
    const linkElement = linkRefs[index].current;
    const img = linkElement.childNodes[0];
    return [img, linkElement];
  };

  const handleItemSelect = (event) => {
    const items = document.querySelectorAll('.item-menu');
    const imagenItems = document.querySelectorAll('.item-menu img');
    
    items.forEach((item) => {
      item.classList.remove('select--Item');
    });

    imagenItems.forEach((img) => {
      img.src = img.dataset.iconDisable;
    });

    const [img, linkElement] = getImgLinkRef(event);

    linkElement.classList.add('select--Item');
    img.src = img.dataset.iconEnable;
  };

  const handlerMouseOver = (event) => {
    const [img] = getImgLinkRef(event);
    img.src = img.dataset.iconEnable;
  };

  const handlerMouseLeave = (event) => {
    const [img, linkElement] = getImgLinkRef(event);

    if (!linkElement.classList.contains('select--Item')) {
      img.src = img.dataset.iconDisable;
    }
  };

  return (
    <aside className='lateral-menu-container'>
      <ul className='lateral-menu--items'>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                key={index}
                className='item-menu'
                to={item.url}
                onClick={handleItemSelect}
                onMouseOver={handlerMouseOver}
                onMouseLeave={handlerMouseLeave}
                ref={linkRefs[index]}
                data-key={index}
              >
                <img
                  key={index}
                  src={item.iconDisable}
                  data-icon-disable={item.iconDisable}
                  data-icon-enable={item.iconEnable}
                  data-key={index}
                  alt={item.name}
                />
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

const mapStateToProps = (state) => {
  return { menuItems: state.menuItems };
};

export default connect(mapStateToProps, null)(MenuLateral);
