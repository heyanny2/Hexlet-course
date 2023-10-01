/**/

//tasksSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, { payload: { task } }) => {
      state.tasks = [task, ...state.tasks];
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;

//index.js

import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice.js';

export default configureStore({
  reducer: {
    tasksStore: tasksReducer,
  },
});

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

import React, { useState } from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { addTask } from '../slices/tasksSlice.js';

const NewTaskForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleAddTask = (e) => {
    e.preventDefault();
    const task = { text, id: _.uniqueId() };
    dispatch(addTask({ task }));
    setText('');
  };

  const handleUpdateNewTaskText = (e) => setText(e.target.value);

  return (
    <form action="" className="form-inline" onSubmit={handleAddTask}>
      <div className="form-group mx-sm-3">
        <input
          type="text"
          data-testid="input"
          required
          value={text}
          onChange={handleUpdateNewTaskText}
        />
      </div>
      <input type="submit" data-testid="submit" className="btn btn-primary btn-sm" value="Add" />
    </form>
  );
};

export default NewTaskForm;

//Tasks.jsx

import React from 'react';
import { useSelector } from 'react-redux';

const Tasks = () => {
  const tasks = useSelector((state) => state.tasksStore.tasks);

  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map(({ id, text }) => (
          <li key={id} className="list-group-item d-flex">
            <span className="mr-auto">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;

//index.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './slices/index.js';

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
