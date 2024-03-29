/* В этом упражнении нужно реализовать логику добавления алертов по клику на кнопку.

Изначально на странице есть одна кнопка. Вёрстка выглядит так:

<button id="alert-generator" class="btn btn-primary">Generate Alert</button>
<div class="alerts m-5"></div>
После клика на кнопку, в контейнер с классом alerts добавляется алерт, с названием Alert 1:

<div class="alerts m-5">
  <div class="alert alert-primary">Alert 1</div>
</div>
Последующий клик добавляет новый алерт сверху:

<div class="alerts m-5">
  <div class="alert alert-primary">Alert 2</div>
  <div class="alert alert-primary">Alert 1</div>
</div>
Каждый клик добавляет новый алерт, меняя число в его имени.

src/application.js
Реализуйте и установите обработчик события click на кнопке в соответствии с логикой выше.*/
