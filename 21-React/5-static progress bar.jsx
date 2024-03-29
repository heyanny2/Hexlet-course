/*Write a realization for a static Bootstrap's progress bar that takes current position as a prop.*/
//showcase on codePen https://codepen.io/heyannny2/pen/abQejxa

import ReactDOM from 'react-dom/client';
import React from 'react';

export default class Progress extends React.Component {
  render() {
    const { percentage } = this.props;
    return (
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="progressbar"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Progress percentage={40} />
  document.getElementById('container')
);
