import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import Form from './components/Form'

ReactDOM.render(
  <BrowserRouter>
    <App />
    <form/>
  </BrowserRouter>,
  document.getElementById('root')
);
