/*Write a Carousel component that works as a Bootstrap's image slider.*/

//showcase on CodePen https://codepen.io/heyanny2/pen/jOXOXYB

import ReactDOM from 'react-dom/client';
import React from 'react';
import cn from 'classnames';
import _ from 'lodash';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    const { images } = this.props;
    this.images = images.map((url) => ({ url, key: _.uniqueId() }));
    this.state = { active: 0 };
  }

  setNext = () => {
    const { active } = this.state;
    const next = ((active + 1) % this.images.length);
    this.setState({ active: next });
  };

  setPrevious = () => {
    const { active } = this.state;
    const prev = ((active + (this.images.length - 1)) % this.images.length);
    this.setState({ active: prev });
  };

  render() {
    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {this.images.map(({ url, key }, id) => {
            const classes = cn({
              'carousel-item': true,
              active: this.state.active === id,
            });
            return (
              <div key={key} className={classes}>
                <img alt="" className="d-block w-100" src={url} />
              </div>
            );
          })}
        </div>
        <button className="carousel-control-prev" data-bs-target="#carousel" onClick={this.setPrevious} type="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" data-bs-target="#carousel" onClick={this.setNext} type="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

const images = ['/images/first.jpeg', '/images/second.jpeg', '/images/third.jpeg'];

ReactDOM.render(
  <Carousel images={images} />,
  document.getElementById('container'));
