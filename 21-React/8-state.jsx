/*Write a BtnGroup component that renders two buttons: click on one makes it active and the other one inactive.*/

//showcase on CodePen https://codepen.io/heyannny2/pen/JjegBma
import cn from 'classnames';
import ReactDOM from 'react-dom/client';
import React from 'react';

export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  selectLeft = () => this.setActive('left');

  selectRight = () => this.setActive('right');

  setActive = (active) => {
    this.setState({ active });
  };

  render() {
    const { active } = this.state;

    const sharedClass = {
      btn: true,
      'btn-secondary': true,
    };

    return (
      <div className="btn-group" role="group">
        <button
          type="button"
          className={cn({
            ...sharedClass,
            left: true,
            ...{ active: active === 'left' },
          })}
          onClick={this.selectLeft}
        >
        Left
        </button>
        <button
          type="button"
          className={cn({
            ...sharedClass,
            right: true,
            ...{ active: active === 'right' },
          })}
          onClick={this.selectRight}
        >
        Right
        </button>
      </div>
    );
  }
}

ReactDOM.render(<BtnGroup />, document.getElementById('container'));
