/*Реализуйте объект по описанному типу Form. Укажите значения value для каждого из полей name и age, а также реализуйте функции валидации.
Валидации могут быть любыми, реализуйте их как угодно на ваше усмотрение.
Укажите значения value так, чтобы name.value проходило валидацию, а age.value — нет. */

type Form = {
  age: {
    value: number,
    validator: (val: number) => boolean
  },
  name: {
    value: string,
    validator: (val: string) => boolean
  }
};

const form: Form = {
  name: {
    value: 'Kirill',
    validator: (val: string) => val.length > 1,
  },
  age: {
    value: 17,
    validator: (val: number) => val > 18,
  },
};

export default form;
