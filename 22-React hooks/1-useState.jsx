/*Implement the BtnGroup component, which renders two buttons. 
Clicking on either button makes it active, while the other one becomes inactive. On the initial load, neither of the buttons is clicked.*/

//showcase on CodePen https://codepen.io/heyanny2/pen/xxmXyez

import cn from 'classnames';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const BtnGroup = () => {
  const [active, setActive] = useState(false);

  const getClassName = (button) => cn('btn btn-secondary', button, { active: active === button });

  return (
    <div className="btn-group" role="group">
      <button
        type="button"
        className={getClassName('left')}
        onClick={() => setActive('left')}
      >
        Left
      </button>
      <button
        type="button"
        className={getClassName('right')}
        onClick={() => setActive('right')}
      >
        Right
      </button>
    </div>
  );
};

ReactDOM.render(<BtnGroup />, document.getElementById("container"));
