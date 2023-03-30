/*Реализуйте логику переключения табов.

Постройте свою логику так, чтобы она позволила использовать на одной странице любое количество компонентов nav.

По клику на таб происходит следующее:

Класс active снимается с текущего элемента меню и активного блока с данными
Класс active добавляется табу, по которому кликнули и соответствующему блоку с данными
Сопоставление таба и блока данных идёт по идентификатору, который прописывается в атрибут data-bs-target табов. По клику на таб, код должен извлечь id, 
найти соответствующий элемент и сделать его активным, не забыв при этом снять класс active с таба и блока, которые были активными до клика. 

<nav>
    <div class="nav nav-tabs">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button">Home</button>
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button">Profile</button>
    </div>
</nav>
<div class="tab-content">
    <div class="tab-pane active" id="home">Home tab</div>
    <div class="tab-pane" id="profile">Profile tab</div>
</div>*/

//solution1
export default () => {
  const links = document.querySelectorAll('[data-bs-toggle]');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      const nav = link.closest('.nav');
      const activeElement = nav.querySelector('.active');
      const activeTabId = activeElement.dataset.bsTarget;
      const activeTab = document.querySelector(activeTabId);
      activeElement.classList.remove('active');
      activeTab.classList.remove('active');
      link.classList.add('active');
      document.querySelector(link.dataset.bsTarget).classList.add('active');
    });
  });
};

//solution2
const handle = (e, container) => {
  const targetTab = e.target;
  if (targetTab.classList.contains('active')) {
    return;
  }

  const targetTabContentId = targetTab.dataset.bsTarget;
  const targetTabContent = document.querySelector(targetTabContentId);

  const activeTab = container.querySelector('.active');
  const activeTabContentId = activeTab.dataset.bsTarget;
  const activeTabContent = document.querySelector(activeTabContentId);

  targetTab.classList.add('active');
  targetTabContent.classList.add('active');

  activeTab.classList.remove('active');
  activeTabContent.classList.remove('active');
};

const navs = document.querySelectorAll('.nav');
navs.forEach((nav) => {
  const tabs = nav.querySelectorAll('[data-bs-toggle]');
  tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => handle(event, nav));
  });
});
