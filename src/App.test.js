import 'jest-localstorage-mock';
import React from 'react';
import { shallow, mount } from 'enzyme';
import './setupTests';
import App from './App';
import ColumnList from './ColumnList';

it('renders without crashing with enzyme', () => {
  mount(<App />);
});

describe('<App />', () => {
  it('renders three ColumnList components', () => {
    const app = shallow(<App />);
    expect(app.find(ColumnList).length).toBe(3);
  });

  it('renders one column for "To do"', () => {
    const app = shallow(<App />);
    expect(app.find(ColumnList)
      .findWhere(item => item.prop('columnTitle') === 'To do')
      .length).toBe(1);
  });

  it('renders one column for "Doing"', () => {
    const app = shallow(<App />);
    expect(app.find(ColumnList)
      .findWhere(item => item.prop('columnTitle') === 'Doing')
      .length).toBe(1);
  });

  it('renders one column for "Done"', () => {
    const app = shallow(<App />);
    expect(app.find(ColumnList)
      .findWhere(item => item.prop('columnTitle') === 'Done')
      .length).toBe(1);
  });

  it('load tasks from localStorage', () => {
    const sampleTasks = [{
      id: 1,
      description: 'foo task',
      status: 'To do',
    }];
    localStorage.setItem('todoListTasks', JSON.stringify(sampleTasks));

    const app = shallow(<App />);
    app.find(ColumnList).map(columnElement => (
      expect(columnElement.prop('tasks')).toEqual(sampleTasks)
    ));
  });
});
