import React from 'react';
import { shallow, mount } from 'enzyme';
import './setupTests';
import ColumnList from './ColumnList';
import If from './If';

const props = {
  columnTitle: 'awesome title',
  tasks: [],
  addTask: jest.fn(),
  updateTask: jest.fn(),
};

it('renders without crashing with enzyme', () => {
  shallow(<ColumnList {...props} />);
});

it('renders an enclosing div', () => {
  const app = shallow(<ColumnList {...props} />);
  expect(app.find('div.column-list').length).toBe(1);
});

it('renders a title for the ColumnList', () => {
  const app = shallow(<ColumnList {...props} />);
  expect(app.find('h3').text()).toEqual('awesome title');
});

describe('form for new tasks', () => {
  it('renders the form when the columnTitle is "To do"', () => {
    const newProps = { ...props, columnTitle: 'To do' };
    const app = shallow(<ColumnList {...newProps} />);
    expect(app.find(If).exists()).toBe(true);
    const ifWrapper = app.find(If);

    expect(ifWrapper.prop('test')).toBe(true);
    expect(app.find('form').exists()).toBe(true);
  });

  it('renders nothing for other columns', () => {
    const newProps = { ...props, columnTitle: 'other than To do' };
    const app = mount(<ColumnList {...newProps} />);

    expect(app.find(If).exists()).toBe(true);
    const ifWrapper = app.find(If);

    expect(ifWrapper.prop('test')).toBe(false);
    expect(app.find('form').exists()).toBe(false);
  });
});

it('renders a list for the tasks', () => {
  const app = shallow(<ColumnList {...props} />);
  expect(app.find('ul.list-items').exists()).toBe(true);
});

describe('tasks', () => {
  it('renders a list item for each task', () => {
    const tasks = [{
      id: 1,
      description: 'never seen',
      status: 'cool',
    }];
    const newProps = { ...props, tasks, columnTitle: 'cool' };
    const app = shallow(<ColumnList {...newProps} />);

    expect(app.find('li').exists()).toBe(true);
    const taskItem = app.find('li');

    expect(taskItem.find('input').prop('type')).toEqual('checkbox');
    expect(taskItem.find('input').prop('checked')).toEqual(false);
    expect(taskItem.find('input').prop('onChange')).toBeDefined();

    expect(taskItem.find('span').exists()).toBe(true);
    expect(taskItem.find('span').text()).toEqual('never seen');
  });

  it('renders a checked checkbox if columnTitle is "done"', () => {
    const tasks = [{
      id: 1,
      description: 'never seen',
      status: 'Done',
    }];
    const newProps = { ...props, tasks, columnTitle: 'Done' };
    const app = shallow(<ColumnList {...newProps} />);

    expect(app.find('li').exists()).toBe(true);
    const taskItem = app.find('li');

    expect(taskItem.find('input').prop('type')).toEqual('checkbox');
    expect(taskItem.find('input').prop('checked')).toEqual(true);
    expect(taskItem.find('input').prop('onChange')).toBeDefined();
  });

  it('renders nothing if the columnTitle has no tasks', () => {
    const tasks = [{
      id: 1,
      description: 'never seen',
      status: 'some status',
    }];
    const newProps = { ...props, tasks };
    const app = shallow(<ColumnList {...newProps} />);
    expect(app.find('li').exists()).toBe(false);
  });
});
