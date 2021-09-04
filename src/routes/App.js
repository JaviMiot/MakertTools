import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import PrinterCost from '../components/PrinterCost';
import PrinterSettings from '../components/PrinterSettings';
//? styles
import '../assets/styles/main.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/printercost' component={PrinterCost} />
        <Route exact path='/printersettings' component={PrinterSettings} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
