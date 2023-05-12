/*Реализуйте логику переключения табов для компонента list-group бутстрапа, используя архитектуру MVC.

Активный элемент списка получает класс active, а контент, соответствующий ему, получает классы active show*/

export default () => {
  const state = {
    lists: {},
  };
  const watchedState = onChange(state, (path, current, previous) => {
    const currentTab = document.querySelector(`#${current}`);
    const currentPanel = document.querySelector(`[aria-labelledby="${current}"]`);
    const previousTab = document.querySelector(`#${previous}`);
    const previousPanel = document.querySelector(`[aria-labelledby="${previous}"]`);

    currentTab.classList.add('active');
    currentPanel.classList.add('active', 'show');
    previousTab.classList.remove('active');
    previousPanel.classList.remove('active', 'show');
  });

  const lists = document.querySelectorAll('[role="tablist"]');
  lists.forEach((list) => {
    const listId = list.id;
    const activeTab = list.querySelector('[role="tab"].active');
    state.lists[listId] = {
      tabId: activeTab.id,
    };

    list.addEventListener('click', (e) => {
      e.preventDefault();
      watchedState.lists[listId].tabId = e.target.id;
    });
  });
};
