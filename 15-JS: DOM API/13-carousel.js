/* Реализуйте логику слайдера в функции экспортированной по умолчанию.

Постройте свою логику так, чтобы она позволила использовать на одной странице любое количество компонентов carousel с любым количеством картинок внутри.

Решите задачу, используя методы jQuery.*/


import $ from 'jquery';

export default () => {
  const buttons = $('a[data-slide]');
  buttons.click((e) => {
    const slideDirection = e.currentTarget.dataset.slide;
    const carousel = e.currentTarget.closest('[data-ride="carousel"]');
    const active = $('.carousel-item.active', carousel);
    const firstSibling = $(active).siblings().first();
    const lastSibling = $(active).siblings().last()
    if (slideDirection === 'next') {
      if ($(active).next().length === 0) {
        $(active).removeClass('active');
        $(firstSibling).addClass('active');
      }
      $(active).removeClass('active').next().addClass('active');
    } else {
      if ($(active).prev().length === 0) {
        $(active).removeClass('active');
        $(lastSibling).addClass('active');
      }
      $(active).removeClass('active').prev().addClass('active');
    }
  });
};
