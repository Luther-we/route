import React from 'react';
import routes from './informations/mainRoutes';
import {
  BrowserRouter as Router
 } from 'react-router-dom';
 import { CreateLinks, CreateRoutes } from './utils/routesUtils';
 import './App.css';

const App = () => (
    <>
      <Router>
          <CreateLinks routes={routes} />
          <CreateRoutes routes={routes}/>
      </Router>
    </>
  )

export default App
