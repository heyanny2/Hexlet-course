/*Write a createStore() function that takes initial state and returns store with this structure: { [task.id]: task, [task2.id]: task2 }.
This is a simplified structure for the tasks manager: you have preset action functions (addTask(), removeTask()) that need to be realized in reducer.*/

import omit from 'lodash/omit';
import redux from 'redux';

const { createStore } = redux;

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'TASK_ADD':
      const { task } = action.payload;
      return { ...state, [task.id]: task };
    case 'TASK_REMOVE':
      const { id } = action.payload;
      return omit(state, id);
    default:
      return state;
  }
};

const getStore = (initialState) => createStore(reducer, initialState);

//actions.js
export const addTask = (task) => ({
  type: 'TASK_ADD',
  payload: {
    task,
  },
});

export const removeTask = (id) => ({
  type: 'TASK_REMOVE',
  payload: {
    id,
  },
});
