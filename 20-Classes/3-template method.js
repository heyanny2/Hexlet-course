/*HTMLPairElement.js
Реализуйте класс HTMLPairElement (наследуется от HTMLElement), который отвечает за генерацию представления парных элементов и работу с телом. 
Класс должен содержать следующие методы:
-toString();
-getTextContent();
-setTextContent(body); // принимает строку

HTMLDivElement.js
Реализуйте класс HTMLDivElement, который описывает собой парный тег <div>.*/

//HTMLElement.js
export default class HTMLElement {
  constructor(attributes = {}) {
    this.attributes = Object.entries(attributes);
  }

  stringifyAttributes() {
    if (this.attributes.length === 0) {
      return '';
    }

    const line = this.attributes
      .map(([attr, value]) => `${attr}="${value}"`)
      .join(' ');

    return ` ${line}`;
  }
}

//HTMLPairElement.js
import HTMLElement from './HTMLElement.js';

class HTMLPairElement extends HTMLElement {
  toString() {
    const attrLine = this.stringifyAttributes();
    const body = this.getTextContent();
    const tagName = this.getTagName();
    return `<${tagName}${attrLine}>${body}</${tagName}>`;
  }

  getTextContent() {
    return this.body ?? '';
  }

  setTextContent(body) {
    this.body = body;
  }
}

export default HTMLPairElement;

//HTMLDivElement.js
import HTMLPairElement from './HTMLPairElement.js';

class HTMLDivElement extends HTMLPairElement {
  getTagName() {
    return 'div';
  }
}

export default HTMLDivElement;
