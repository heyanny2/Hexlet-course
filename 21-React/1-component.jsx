/*Реализуйте компонент Card, возвращающий следующий jsx:

<div className="card">
  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">Some quick example text to build on the card</p>
    <button type="button" className="btn btn-primary">Go somewhere</button>
  </div>
</div>*/
///showcase on CodePen https://codepen.io/heyannny2/pen/VwVJeKa
import ReactDOM from 'react-dom/client';
import React from 'react';

//Card.jsx
export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">Some quick example text to build on the card</p>
          <button type="button" className="btn btn-primary">Go somewhere</button>
        </div>
      </div>
    );
  }
}

//index.jsx
const mountNode = document.getElementById("container");;
ReactDOM.render(<Card />, mountNode);
