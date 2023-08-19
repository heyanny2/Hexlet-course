/*Write Collapse component that on click toggles the content of the card and hides on repeated click.
The initial state (show: true/false) and the hidden text are in props.*/

//showcase on CodePen https://codepen.io/heyanny2/pen/yLGLZWr

import ReactDOM from 'react-dom/client';
import React from 'react';
import cn from 'classnames';

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: props.opened };
  }

  toggleText = () => {
    const { opened } = this.state;
    this.setState({ opened: !opened });
  };

  render() {
    const { opened } = this.state;
    const { text } = this.props;
    const collapseClass = cn({
      collapse: true,
      show: opened,
    });

    return (
      <div>
        <p>
          <a onClick={this.toggleText} className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button" aria-expanded={opened}>Link with href</a>
        </p>
        <div className={collapseClass}>
          <div className="card card-body">
            {text}
          </div>
        </div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  opened: true,
};

const text = 'collapse me';

ReactDOM.render(
  <Collapse text={text} />,
  document.getElementById('container'));
