import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/shared/Router';
import Navigation from './components/shared/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Router/>
      <Navigation/>
    </BrowserRouter>
  );
}

export default App;