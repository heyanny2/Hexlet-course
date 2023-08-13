/*Write an Alert React component that has some text and changes according to its type 
(primary, secondary, success, danger, warning, info, light, dark).
Type is changed by adding proper class: class="alert alert-warning", "alert alert-light"...*/

import ReactDOM from 'react-dom/client';
import React from 'react';
import cn from 'classnames';

export default class Alert extends React.Component {
  render() {
    const { type, text } = this.props;

    const alertClass = cn('alert', `alert-${type}`);

    return (
      <div className={alertClass} role="alert">
        {text}
      </div>
    );
  }
}

ReactDOM.render(
  <Alert type="warning" text="what is love?" />
  document.getElementById('container')
);
