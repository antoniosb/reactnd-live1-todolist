import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColumnList from './ColumnList';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">TODO List</h1>
    </header>
    <div className="App-container">
      <div className="app-lists">
        <ColumnList columnTitle="To do" />
        <ColumnList columnTitle="Done" />
      </div>
    </div>
  </div>
);

export default App;
