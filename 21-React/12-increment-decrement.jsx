/*
Write a React component that has two buttons ("+" and "-") and a log: 
- every click on + or - increments or decrements some value (starting with 0) and adds a line on the log with the new value as a button content.
- click on log button deletes the line and affects next increment-decrement values.
*/

import uniqueId from 'lodash/uniqueId';
import React from 'react';
import ReactDOM from "react-dom";

//showcase on CodePen https://codepen.io/heyanny2/pen/gOZwQEb

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  handleClick = (value) => {
    const { items } = this.state;
    const newValue = items[0] ? (items[0].value + value) : value;
    this.setState({ items: [{ value: newValue, id: uniqueId() }, ...items] });
  };

  increment = () => this.handleClick(1);

  decrement = () => this.handleClick(-1);

  handleRemove = (currentId) => () => {
    const { items } = this.state;
    this.setState({ items: items.filter(({ id }) => id !== currentId) });
  };

  renderItems = () => {
    const { items } = this.state;
    if (items.length === 0) {
      return null;
    }
    return (
      <div className="list-group">
        {items.map(({ value, id }) => (
          <button
            type="button"
            className="list-group-item list-group-item-action"
            onClick={this.handleRemove(id)}
            key={id}>
            {value}
          </button>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button type="button" className="btn btn-outline-success" onClick={this.increment}>+</button>
          <button type="button" className="btn btn-outline-danger" onClick={this.decrement}>-</button>
        </div>
        {this.renderItems()}
      </div>
    );
  }
}

ReactDOM.render(<Component />, document.getElementById("container"));
