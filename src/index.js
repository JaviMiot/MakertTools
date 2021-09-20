import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';
import reducer from './reducers';

//* imagenes de iconos
import printerIcon from '@icons/3dPrinterLogo.svg';
import printerBlueIcon from '@icons/3dPrinterLogoBlue.svg';
import laserIcon from '@icons/laserLogo.svg';
import laserBlueIcon from '@icons/laserLogoBlue.svg';
import homeIcon from '@icons/home.svg';
import homeBlueIcon from '@icons/homeBlue.svg';
import boxIcon from '@icons/box.png';
import boxBlueIcon from '@icons/boxBlue.png';

const initialState = {
  menuItems: [
    {
      name: 'Home',
      url: '/',
      iconDisable: homeIcon,
      iconEnable: homeBlueIcon,
    },
    {
      name: 'Printer Settings',
      url: '/printersettings',
      iconDisable: printerIcon,
      iconEnable: printerBlueIcon,
    },
    {
      name: 'Laser Settings',
      url: '/lasersettings',
      iconDisable: laserIcon,
      iconEnable: laserBlueIcon,
    },
    {
      name: 'Materials List',
      url: '/materials-list',
      iconDisable: boxIcon,
      iconEnable: boxBlueIcon,
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
);
