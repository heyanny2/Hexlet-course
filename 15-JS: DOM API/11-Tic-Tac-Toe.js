/*Реализуйте и экспортируйте по умолчанию функцию игры крестики-нолики на поле из 9 ячеек (представлены таблицей). 
В упражнении дается готовая функция генерации поля. Воспользуйтесь ей для инициализации игры. Поле нужно добавить в тег с классом .root.

Затем, по клику, игра ставит поочередно x и o на поле. Подразумевается, что оба игрока играют за одним компьютером и просто кликают по очереди.

Выигрыш в игре никак не отмечается.*/

//pregenegated field
const generateField = () => {
  const tableEl = document.createElement('table');

  tableEl.className = 'table-bordered';
  for (let i = 0; i < 3; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 3; j += 1) {
      const cell = row.insertCell();
      cell.className = 'py-2 px-3';
      cell.innerHTML = '<span class="invisible">s</span>';
    }
  }
  return tableEl;
};

//JS solution
export default () => {
  const root = document.querySelector('.root');
  root.append(generateField());
  let currentPlayer = 'x';
  const switchPlayer = () => {
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
  };

  root.addEventListener('click', (e) => {
    if (e.target.textContent === 's') {
      e.target.textContent = currentPlayer;
    }
    switchPlayer();
  });
};
