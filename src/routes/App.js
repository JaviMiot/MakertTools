import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import PrinterCost from '../containers/PrinterCost';
import PrinterSettings from '../containers/PrinterSettings';
import LaserCost from '../containers/LaserCost';
import LaserSettings from '../containers/LaserSettings';
import MaterialsList from '../containers/MaterialsList';
//? styles
import '../assets/styles/main.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/printercost' component={PrinterCost} />
        <Route exact path='/printersettings' component={PrinterSettings} />
        <Route exact path='/lasercost' component={LaserCost} />
        <Route exact path='/lasersettings' component={LaserSettings} />
        <Route exact path='/materials-list' component={MaterialsList} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
