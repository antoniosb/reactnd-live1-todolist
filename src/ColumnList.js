import React from 'react';
import PropTypes from 'prop-types';
import If from './If';
import './ColumnList.css';

const ColumnList = ({
  columnTitle, tasks, addTask, updateTask,
}) => {
  const currentTasks = tasks.filter(task => task.status === columnTitle);

  return (
    <div className="column-list">
      <h3>{columnTitle}</h3>
      <If test={columnTitle === 'To do'}>
        <form onSubmit={addTask}>
          <input placeholder="Create new task" type="text" />
          <button type="submit">
            Add task
          </button>
        </form>
      </If>
      <ul className="list-items">
        {
          currentTasks.map(task => (
            <li key={task.id}>
              <input
                type="checkbox"
                onChange={updateTask}
                checked={task.status === 'Done'}
              />
              <span>{task.description}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

ColumnList.propTypes = {
  columnTitle: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(Object).isRequired,
  addTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default ColumnList;
