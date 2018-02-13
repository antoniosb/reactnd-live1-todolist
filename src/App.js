import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColumnList from './ColumnList';

const App = () => {
  const tasks = [
    {
      id: 1,
      description: 'develop project #1',
      status: 'To do',
    },
    {
      id: 2,
      description: 'get used with arrow functions',
      status: 'Done',
    },
    {
      id: 3,
      description: 'get used with arrow functions',
      status: 'Doing',
    },
  ];
  const columns = [
    {
      title: 'To do',
      tasks,
    },
    {
      title: 'Doing',
      tasks,
    },
    {
      title: 'Done',
      tasks,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">TODO List</h1>
      </header>
      <div className="App-container">
        <div className="app-lists">
          {columns.map(column => (
            <ColumnList
              key={column.title}
              columnTitle={column.title}
              tasks={column.tasks}
            />))}
        </div>
      </div>
    </div>
  );
};

export default App;
