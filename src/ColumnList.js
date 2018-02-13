import React from 'react';
import PropTypes from 'prop-types';
import If from './If';
import './ColumnList.css';

const ColumnList = ({ columnTitle, tasks }) => {
  const currentTasks = tasks.filter(task => task.status === columnTitle);

  return (
    <div className="column-list">
      <If test={columnTitle === 'To do'}>
        <form onSubmit={() => {}}>
          <input placeholder="Create new task" type="text" />
          <button type="submit">
            Add task
          </button>
        </form>
      </If>
      <h3>{columnTitle}</h3>
      <ul className="list-items">
        {
          currentTasks.map(task => (
            <li key={task.id}>
              <input
                type="checkbox"
                onChange={() => {}}
                checked={task.status === columnTitle}
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
};

export default ColumnList;
