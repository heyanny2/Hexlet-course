/*HTMLHrElement.js
Реализуйте класс HTMLHrElement (наследуется от HTMLElement), который отвечает за представление тега <hr>. 
Внутри класса определите функцию toString(), которая возвращает текстовое представление тега.

HTMLElement.js
Реализуйте метод stringifyAttributes(), который формирует строчку для аттрибутов. Используйте этот метод в наследнике для формирования тега.*/

//HTMLHrElement.js
export default class HTMLHrElement extends HTMLElement {
  toString() {
    const attrString = this.stringifyAttributes();
    return `<hr${attrString}>`;
  }
}

//HTMLElement.js
export default class HTMLElement {
  constructor(attributes = {}) {
    this.attributes = attributes;
  }

  stringifyAttributes() {
    const string = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');
    return string;
  }
}
