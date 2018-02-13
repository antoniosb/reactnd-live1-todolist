import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColumnList from './ColumnList';

const App = () => {
  const columns = [
    { title: 'To do', tasks: [] },
    { title: 'Done', tasks: [] },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">TODO List</h1>
      </header>
      <div className="App-container">
        <div className="app-lists">
          {columns.map(column => <ColumnList columnTitle={column.title} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
