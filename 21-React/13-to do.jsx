/*Realize a simple todo app: user can add and remove tasks.*/

//showcase on CodePen https://codepen.io/heyanny2/pen/ZEVBpZV

import { uniqueId } from 'lodash';
import React from 'react';
import ReactDOM from "react-dom";

//Ietem.jsx
export default class Item extends React.Component {
  render() {
    const { task, onRemove } = this.props;
    return (
      <div className="row">
        <div className="col-auto">
          <button type="button" className="btn btn-primary btn-sm" onClick={onRemove}>-</button>
        </div>
        <div className="col">{task}</div>
      </div>
    );
  }
}

//TodoBox.jsx

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      items: [],
    };
  }

  handleChange = (e) => {
    const { target } = e;
    const { value } = target;
    this.setState({ task: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { task, items } = this.state;
    const newTask = { value: task, id: uniqueId() };
    this.setState({
      task: '',
      items: [newTask, ...items],
    });
  };

  handleRemove = (removingId) => (e) => {
    e.preventDefault();
    const { items } = this.state;
    const newItems = items.filter(({ id }) => id !== removingId);
    this.setState({ items: newItems });
  };

  render() {
    const { task, items } = this.state;
    return (
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={this.handleSubmit}>
            <div className="me-3">
              <input
                type="text"
                value={task}
                required=""
                className="form-control"
                placeholder="I am going..."
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        {items.map((item) => (
          <div key={item.id}>
            <Item onRemove={this.handleRemove(item.id)} task={item.value} />
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<TodoBox />, document.getElementById("container"));
