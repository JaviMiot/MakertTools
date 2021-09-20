import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/containers/MenuLateral.scss';

const MenuLateral = (props) => {
  const { menuItems } = props;
  debugger;

  const handleItemSelect = (event) => {
    const items = document.querySelectorAll('.item-menu');
    const imagenItems = document.querySelectorAll('.item-menu img');

    let itemSelected;
    let imagenIconSelected;

    items.forEach((item) => {
      item.classList.remove('select--Item');
    });

    imagenItems.forEach((imagen) => {
      imagen.src = imagen.dataset.iconDisable;
    });

    if (event.target.nodeName === 'A') {
      itemSelected = event.target;
      imagenIconSelected = itemSelected.childNodes[0];
    } else {
      itemSelected = event.target.parentNode;
      imagenIconSelected = itemSelected.childNodes[0];
    }
    itemSelected.classList.add('select--Item');
    imagenIconSelected.src = imagenIconSelected.dataset.iconEnable;
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
              >
                <img
                  key={index}
                  src={item.iconDisable}
                  data-icon-disable={item.iconDisable}
                  data-icon-enable={item.iconEnable}
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
