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
  beforeEach(() => {
    localStorage.clear();
  });

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

  describe('adding tasks', () => {
    let app;
    let form;
    beforeEach(() => {
      app = shallow(<App />);
      form = {
        preventDefault: () => {},
        target: {
          querySelector: () => ({
            value: 'new task',
          }),
        },
      };
    });

    it('updates the component state', () => {
      app.instance().addTask(form);
      expect(app.state('tasks').length).toBe(1);
      expect(app.state('tasks')[0].id).toEqual(1);
      expect(app.state('tasks')[0].description).toEqual('new task');
      expect(app.state('tasks')[0].status).toEqual('To do');
    });

    it('updates the localStorage', () => {
      expect(localStorage.getItem('todoListTasks')).toBeNull();
      app.instance().addTask(form);
      expect(localStorage.getItem('todoListTasks')).not.toBeNull();
      const tasks = JSON.parse(localStorage.getItem('todoListTasks'));
      expect(tasks.length).toBe(1);
      expect(tasks[0].id).toEqual(1);
      expect(tasks[0].description).toEqual('new task');
      expect(tasks[0].status).toEqual('To do');
    });
  });

  describe('updating tasks', () => {
    xit('updates the component state', () => {

    });

    xit('updates the localStorage', () => {

    });

    describe('Tasks status transitions', () => {
      xit('"To do" => "Doing"', () => {

      });

      xit('"Doing" => "Done"', () => {

      });

      xit('"Done" => "To do"', () => {

      });
    });
  });
});
