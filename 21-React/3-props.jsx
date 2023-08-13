/*Write Card component that takes title and text props.*/

import React from 'react';

export default class Card extends React.Component {
  render() {
    const { title, text } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
  }
}
Card.defaultProps = {
  title: 'title',
  text: 'text',
};

const title = "title 1";
const text = "text 1";
ReactDOM.render(
  <Card title={title} text={text} />,
  document.getElementById("container")
);
