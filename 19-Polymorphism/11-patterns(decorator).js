/*Реализуйте класс LabelTag, который умеет оборачивать другие теги:
import InputTag from '../tags/InputTag.js';
import LabelTag from '../tags/LabelTag.js';
 
const inputTag = new InputTag('submit', 'Save');
const labelTag = new LabelTag('Press Submit', inputTag);
labelTag.render();
// <label>
//   Press Submit
//   <input type="submit" value="Save">
// </label>

Метод render(), позволяет получить текстовое представление тега.*/

//InputTag.js
export default class InputTag {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  render() {
    return `<input type="${this.type}" value="${this.value}">`;
  }

  toString() {
    return this.render();
  }
}

//LabelTag.js
export default class LabelTag {
  constructor(text, child) {
    this.text = text;
    this.child = child;
  }

  render() {
    return `<label>${this.text}${this.child}</label>`;
  }

  toString() {
    return this.render();
  }
}
