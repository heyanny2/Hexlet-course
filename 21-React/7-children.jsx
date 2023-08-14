/*Write ListGroup component that renders argumented children as <ul><li> html list.*/

//showcase on CodePen https://codepen.io/heyannny2/pen/poQMLdR

import ReactDOM from 'react-dom/client';
import React from 'react';

export default class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ul className="list-group">
        {React.Children.map(children, (child) => <li className="list-group-item">{child}</li>)}
      </ul>
    );
  }
}

const dom = (
  <ListGroup>
    <p>one</p>
    <p>two</p>
  </ListGroup>
);

ReactDOM.render(dom, document.getElementById('container'));
