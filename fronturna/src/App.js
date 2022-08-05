import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
//import { useReducer } from "react";
//import { isDOMComponent } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes'


function App() {
  
  return (
    <BrowserRouter>

      <Routes/>
      
    </BrowserRouter>
  );
}

export default App;
