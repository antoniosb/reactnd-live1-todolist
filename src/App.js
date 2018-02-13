import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColumnList from './ColumnList';

export default class App extends Component {
  state = {
    tasks: [],
  }

  addTask(e) {
    e.preventDefault();

    let { tasks } = this.state;
    const { value } = e.target.querySelector('input');
    const newTask = {
      id: tasks.length + 1,
      description: value,
      status: 'To do',
    };
    tasks = tasks.concat(newTask);
    this.setState({ tasks });
  }

  updateTask() {
    console.log('Updating task...');
  }

  render() {
    const { tasks } = this.state;
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
                addTask={e => this.addTask(e)}
                updateTask={() => this.updateTask()}
              />))}
          </div>
        </div>
      </div>
    );
  }
}
