/*Write a realization for a small todo app: this time make two categories: 
finished tasks and active, and user should be able to move active to finished and vice versa on click on task. 
Finished task gets overcrossed.
Work with backend:
--- GET /tasks - get all tasks.
Response: [{"id":1,"text":"asdf","state":"finished"},{"id":2,"text":"asdasd","state":"active"}]
--- POST /tasks - create a new task
Request: {"text": "new task"}
Response: {"id":4,"text":"new task","state":"active"}
--- PATCH /tasks/:id/finish - mark task as finished
Response: {"id":1,"text":"asdf","state":"finished"}
-- PATCH /tasks/:id/activate - mark finished task as active
Response: {"id":1,"text":"asdf","state":"active"}*/

import axios from 'axios';
import React from 'react';
import ReactDOM from "react-dom";
import update from 'immutability-helper';
//Item.jsx
const Item = ({ task, onClick }) => {
  const link = <a href="#" className="todo-task" onClick={onClick}>{task.text}</a>;

  return (
    <div className="row">
      <div className="col-1">
        {task.id}
      </div>
      <div className="col">
        {task.state === 'finished' ? <s>{link}</s> : link}
      </div>
    </div>
  );
};

//routes.jsx
const host = '/api';

export default {
  tasksPath: () => [host, 'tasks'].join('/'),
  finishTaskPath: (id) => [host, 'tasks', id, 'finish'].join('/'),
  activateTaskPath: (id) => [host, 'tasks', id, 'activate'].join('/'),
};

//TodoBox.jsx
class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTaskText: '', tasks: [] };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  handleChangeText = ({ target: { value } }) => {
    this.setState({ newTaskText: value });
  };

  handleFinishTask = (id) => async () => {
    await axios.patch(routes.finishTaskPath(id));
    const { tasks } = this.state;
    const index = tasks.findIndex((t) => t.id === id);
    const updatedTasks = update(tasks, { [index]: { $merge: { state: 'finished' } } });
    this.setState({ tasks: updatedTasks });
  };

  handleActivateTask = (id) => async () => {
    await axios.patch(routes.activateTaskPath(id));
    const { tasks } = this.state;
    const index = tasks.findIndex((t) => t.id === id);
    const updatedTasks = update(tasks, { [index]: { $merge: { state: 'active' } } });
    this.setState({ tasks: updatedTasks });
  };

  handleSubmitForm = async (e) => {
    e.preventDefault();
    const { newTaskText, tasks } = this.state;
    const response = await axios.post(routes.tasksPath(), { text: newTaskText });
    this.setState({ newTaskText: '', tasks: [response.data, ...tasks] });
  };

  fetchTasks = async () => {
    const response = await axios.get(routes.tasksPath());
    this.setState({ tasks: response.data });
  };

  renderFinishedTasks(tasks) {
    return (
      <div className="todo-finished-tasks">
        {tasks.map((task) => (
          <Item key={task.id} task={task} onClick={this.handleActivateTask(task.id)} />
        ))}
      </div>
    );
  }

  renderActiveTasks(tasks) {
    return (
      <div className="todo-active-tasks">
        {tasks.map((task) => (
          <Item key={task.id} task={task} onClick={this.handleFinishTask(task.id)} />
        ))}
      </div>
    );
  }

  renderForm() {
    const { newTaskText } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm} className="todo-form mx-3">
        <div className="d-flex col-md-3">
          <input
            type="text"
            onChange={this.handleChangeText}
            value={newTaskText}
            required
            className="form-control me-3"
            placeholder="I am going..."
          />
          <button type="submit" className="btn btn-primary">add</button>
        </div>
      </form>
    );
  }

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((t) => t.state === 'active');
    const finishedTasks = tasks.filter((t) => t.state === 'finished');

    return (
      <div>
        <div className="mb-3">
          {this.renderForm()}
        </div>
        {activeTasks.length > 0 && this.renderActiveTasks(activeTasks)}
        {finishedTasks.length > 0 && this.renderFinishedTasks(finishedTasks)}
      </div>
    );
  }
}

ReactDOM.render(<TodoBox />, document.getElementById("container"));
