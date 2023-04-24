/*Контейнер, внутри которого находятся данные для редактирования, помечается специальным аттрибутом: data-editable-target. 
Значением этого атрибута является имя поля.
Когда происходит клик на этом элементе, то он заменяется на форму.
Затем пользователь может изменить значение и сохранить его. 
Повторный клик снова открывает форму для редактирования, в которой окажется то значение, которое вбил пользователь.
Если значение стирается, то тогда текст меняется на первоначальный (и добавляется курсив), такой какой он был до любых изменений.*/

//showcase https://codepen.io/heyannny2/pen/ZEqevNw

const render = (state, div) => {
  const elName = div.dataset.editableTarget;
  div.innerHTML = '';

  const createForm = () => {
    const form = document.createElement('form');
    const label = document.createElement('label');
    label.setAttribute('for', elName);
    label.classList.add('sr-only');
    label.textContent = elName;
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', elName);
    input.setAttribute('id', elName);
    input.setAttribute('value', state.value);

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', `Save ${elName}`);
    form.append(label, input, submit);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const value = formData.get(elName).trim();
      state.value = value;
      state.mode = 'text';
      render(state, div);
    });

    return { form, input };
  };

  const createText = () => {
    if (state.value === '') {
      const i = document.createElement('i');
      i.textContent = elName;
      return i;
    }

    return document.createTextNode(state.value);
  };

  switch (state.mode) {
    case 'text': {
      const text = createText();
      div.append(text);
      break;
    }
    case 'form': {
      const { form, input } = createForm();
      div.append(form);
      input.select();
      break;
    }
    default:
      throw new Error(`Unknown mode: ${state.mode}`);
  }
};

export default () => {
  const elements = document.querySelectorAll('[data-editable-target]');
  elements.forEach((element) => {
    const state = {
      mode: 'text',
      value: '',
    };

    element.addEventListener('click', () => {
      if (state.mode === 'text') {
        state.mode = 'form';
        render(state, element);
      }
    });
  });
};
