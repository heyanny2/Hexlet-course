/*Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход объект со свойствами title и text, 
и возвращает jsx с подставленными значениями. Пример:

import getCard from './Card.jsx';
 
getCard({ title: 'hi', text: 'how are you?' });
// <div className="card">
//   <div className="card-body">
//     <h4 className="card-title">hi</h4>
//     <p className="card-text">how are you?</p>
//   </div>
// </div>
Если title отсутствует, то соответствующий ему кусок dom не отрисовывается, 
то же самое справедливо и для text. Если отсутствуют оба свойства, то из функции необходимо вернуть null.*/

import React from 'react';

export default ({ title, text }) => {
  if (!title && !text) {
    return null;
  }
  const vdom = (
    <div className="card">
      <div className="card-body">
        {title ? <h4 className="card-title">{title}</h4> : null}
        {text ? <p className="card-text">{text}</p> : null}
      </div>
    </div>
  );
  return vdom;
};
