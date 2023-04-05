/*Реализуйте автокомплит.
На странице присутствуют элементы input, с атрибутами data-autocomplete и data-autocomplete-name, к которым нужно привязаться. 
Атрибут data-autocomplete содержит ссылку, по которой нужно делать запрос на данные. 
Атрибут data-autocomplete-name содержит имя, по которому необходимо найти на странице список ul с точно таким же атрибутом и значением. 
В этом списке выводятся данные.

При изменении строки в поле ввода (ввод символов или их удаление), необходимо выполнить запрос на сервер с query-параметром search, 
значением которого будет строка введенная в input. Сервер возвращает массив из стран (на английском языке).
Если этот массив не пустой, то нужно заполнить список таким образом:

<ul data-autocomplete-name="country">
  <li>pakistan</li>
  <li>panama</li>
  <li>paraguay</li>
</ul>
Если с сервера пришел пустой список, то нужно вывести:

<ul data-autocomplete-name="country">
  <li>Nothing</li>
</ul>

*/

export default () => {
  const inputs = document.querySelectorAll('input[data-autocomplete]');
  inputs.forEach((input) => {
    const jsonPath = input.dataset.autocomplete;
    const name = input.dataset.autocompleteName;
    input.addEventListener('input', async (e) => {
      const autocompleteInput = e.target.value;
      const url = new URL(jsonPath, window.location.origin);
      const ul = document.querySelector(`ul[data-autocomplete-name="${name}"]`);
      url.searchParams.append('search', autocompleteInput);
      const response = await fetch(url);
      const data = await response.json();
      const options = data.length === 0 ? ['Nothing'] : data;
      const listHTML = options.map((item) => `<li>${item}</li>`).join('\n');
      ul.innerHTML = listHTML;
    });
  });
};
