import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom0';
import Header from './components/common/Header';
import List from './components/list/List';
import './index.css';


const App = () => {
  return (
    <div>
      <Header />
    </div>

  )
}

ReactDOM.render( <App />,document.getElementById('root'));
