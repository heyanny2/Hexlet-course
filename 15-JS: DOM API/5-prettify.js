/*Реализуйте и экспортируйте функцию по умолчанию, которая находит текст (дочерние текстовые узлы) внутри элемента <div> и оборачивает текст в параграф. Переводы строк и отступы изменяться не должны.

// <body>
//   <p>Boom</p>
//   text
//   <div>Bam</div>
// </body>
prettify(document);
console.log(document.body.innerHTML);
// <body>
//   <p>Boom</p>
//   text
//   <div><p>Bam</p></div>
// </body>
*/

export default (document) => {
  const divElements = document.getElementsByTagName('div');
  const divArr = [...divElements];
  divArr.forEach((div) => {
    const textNodes = [...div.childNodes]
      .filter((node) => node instanceof Text)
      .filter((node) => node.textContent.trim() !== '');
    textNodes.forEach((node) => {
      const p = document.createElement('p');
      p.textContent = node.textContent;
      node.replaceWith(p);
    });
  });
};
