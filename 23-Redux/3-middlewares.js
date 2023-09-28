/*Implement a middleware addDate() that appends the current date to the task name. 
For example, when entering the task name 'New Task,' a task with the name 'Task for 14.02.2022: New Task' should be generated.*/

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const addDate = (store) => (next) => (action) => {
  if (action.type !== 'TASK_ADD') {
    return next(action);
  }

  const date = new Date();
  const today = date.toLocaleDateString('ru-RU');
  action.payload.task.text = `Task for ${today}: ${action.payload.task.text}`;
  return next(action);
};

export default { logger, addDate };

//actions
import { createAction } from 'redux-actions';

export const addTask = createAction('TASK_ADD');
export const updateNewTaskText = createAction('NEW_TASK_TEXT_UPDATE');

//Tasks.jsx

import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => state;

const Tasks = ({ tasks }) => {
  const renderTask = (task) => (
    <li key={task.id} className="list-group-item d-flex">
      <span className="mr-auto">
        <a href="#" className="text-reset">{task.text}</a>
      </span>
    </li>
  );

  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map(renderTask)}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(Tasks);

//App.jsx
import React from 'react';
import NewTaskForm from './NewTaskForm.jsx';
import Tasks from './Tasks.jsx';

const App = () => (
  <div className="col-5">
    <NewTaskForm />
    <Tasks />
  </div>
);
export default App;

//NewTaskForm.jsx

import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const props = {
    text: state.text,
  };
  return props;
};

const actionCreators = {
  updateNewTaskText: actions.updateNewTaskText,
  addTask: actions.addTask,
};

const NewTaskForm = ({
  addTask,
  text,
  updateNewTaskText,
}) => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const task = { text, id: _.uniqueId(), state: 'active' };
    addTask({ task });
  };

  const handleUpdateNewTaskText = (e) => {
    updateNewTaskText({ text: e.target.value });
  };

  return (
    <form action="" className="form-inline" onSubmit={handleAddTask}>
      <div className="form-group mx-sm-3">
        <input
          type="text"
          required
          value={text}
          onChange={handleUpdateNewTaskText}
        />
      </div>
      <input type="submit" className="btn btn-primary btn-sm" value="Add" />
    </form>
  );
};

export default connect(mapStateToProps, actionCreators)(NewTaskForm);

//index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index.js';
import App from './components/App.jsx';

import middlewares from './middlewares.js';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      middlewares.logger,
      middlewares.addDate,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args,
  ),
);

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

