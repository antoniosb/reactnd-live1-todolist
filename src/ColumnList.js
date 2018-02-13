import React from 'react';
import PropTypes from 'prop-types';
import If from './If';
import './ColumnList.css';

const ColumnList = ({ columnTitle }) => (
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
      <li />
    </ul>
  </div>
);

ColumnList.propTypes = {
  columnTitle: PropTypes.string.isRequired,
};

export default ColumnList;
