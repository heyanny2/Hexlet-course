/*Реализуйте и экспортируйте по умолчанию функцию, реализующую приложение "суммирующий калькулятор". 
Калькулятор представляет из себя одно поле для ввода чисел и две кнопки: сложение и сброс. 
Под калькулятором выводится текущая сумма, которая изначально равна нулю. Каждое нажатие кнопки plus добавляет к этой сумме введенное значение. 
Нажатие кнопки сброс возвращает состояние к первоначальному (сумма устанавливается в 0).

Сделайте калькулятор дружественным пользователю: устанавливайте фокус на поле для ввода при каждой отрисовке формы (включая первую) 
и очищайте форму после отправки/очистки.*/

///showcase - https://codepen.io/heyannny2/pen/xxywYxB

const render = (formEl, result, inputEl, state) => {
  formEl.reset();
  result.textContent = state;
  inputEl.focus();
};

export default () => {
  let state = 0;

  const inputEl = document.querySelector('input[type=number]');
  const result = document.querySelector('#result');
  const formEl = document.querySelector('.form-inline');
  const resetEl = document.querySelector('button');

  inputEl.focus();

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const number = formData.get('number');
    const parsedNum = parseInt(number, 10);
    state += parsedNum;
    render(formEl, result, inputEl, state);
  });

  resetEl.addEventListener('click', () => {
    state = 0;
    render(formEl, result, inputEl, state);
  });
};
