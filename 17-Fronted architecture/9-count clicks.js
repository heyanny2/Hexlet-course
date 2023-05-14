/*В этом упражнении вам предстоит запрограммировать мультиязычный счётчик нажатий, состоящий из переключателя языка, 
кнопки с числом кликов и кнопки сброса счётчика.
Тексты должны подставляться через библиотеку i18next.*/

//application.js

import i18n from 'i18next';
import onChange from 'on-change';
import resources from './locales/index.js';

const languages = ['en', 'ru'];
const handleSwitchLanguage = (state) => (evt) => {
  const { lng } = evt.target.dataset;
  state.lng = lng;
};

const render = (container, watchedState, i18nInstance) => {
  const div = document.createElement('div');
  div.classList.add('btn-group');
  div.setAttribute('role', 'group');
  languages.forEach((lng) => {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    const className = watchedState.lng === lng ? 'btn-primary' : 'btn-outline-primary';
    button.classList.add('btn', 'mb-3', className);
    button.setAttribute('data-lng', lng);
    button.textContent = i18nInstance.t(`languages.${lng}`);
    button.addEventListener('click', handleSwitchLanguage(watchedState));
    div.append(button);
  });
  const counter = document.createElement('button');
  counter.setAttribute('type', 'button');
  counter.classList.add('btn', 'btn-info', 'mb-3', 'align-self-center');
  counter.textContent = i18nInstance.t('buttons.counter.count', { count: watchedState.clicksCount });
  counter.addEventListener('click', () => {
    watchedState.clicksCount += 1;
  });
  const reset = document.createElement('button');
  reset.setAttribute('type', 'button');
  reset.classList.add('btn', 'btn-warning');
  reset.textContent = i18nInstance.t('buttons.reset');
  reset.addEventListener('click', () => {
    watchedState.clicksCount = 0;
  });
  container.innerHTML = '';
  container.append(div, counter, reset);
};

export default async () => {
  const defaultLanguage = 'en';
  const i18nInstance = i18n.createInstance();
  await i18nInstance.init({
    lng: defaultLanguage,
    debug: false,
    resources,
  });
  const state = {
    lng: defaultLanguage,
    clicksCount: 0,
  };
  const container = document.querySelector('.container');
  const watchedState = onChange(state, (path, value) => {
    switch (path) {
      case 'lng': i18nInstance.changeLanguage(value).then(() => render(container, watchedState, i18nInstance));
        break;
      case 'clicksCount': render(container, watchedState, i18nInstance);
        break;
      default:
        break;
    }
  });
  render(container, watchedState, i18nInstance);
};

//locales/en.js

export default {
  translation: {
    languages: {
      ru: 'Русский',
      en: 'English',
    },
    buttons: {
      counter: {
        count_one: '{{count}} click',
        count_other: '{{count}} clicks',
      },
      reset: 'Reset',
    },
  },
};

//locales/ru.js

export default {
  translation: {
    languages: {
      ru: 'Русский',
      en: 'English',
    },
    buttons: {
      counter: {
        count_one: '{{count}} клик',
        count_many: '{{count}} кликов',
        count_few: '{{count}} клика',
      },
      reset: 'Сбросить',
    },
  },
};

//locales/index.js

import en from './en.js';
import ru from './ru.js';

export default { en, ru };
