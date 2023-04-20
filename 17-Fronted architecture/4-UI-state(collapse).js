/*Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список компаний
и использует этот список для формирования кнопок (по одной на каждую компанию). 
Нажатие на кнопку приводит к выводу описания компании (если есть описание другой компании, оно заменяется). 
Повторное нажатие удаляет вывод. Данные должны полностью удаляться, скрытие с помощью классов не подходит. 
По умолчанию не показывается никакое описание.*/

//showcase https://codepen.io/heyannny2/pen/GRYNdmE

const companies = [
  { id: 1, name: 'Hexlet', description: 'online courses' },
  { id: 2, name: 'Google', description: 'search engine' },
  { id: 3, name: 'Facebook', description: 'social network' },
];

const render = (container, state) => {
  container.innerHTML = '';
  state.companies.forEach((company) => {
    const button = document.createElement('div');
    button.classList.add('btn', 'btn-primary');
    button.setAttribute('id', company.id);
    button.textContent = company.name;
    container.appendChild(button);
    button.addEventListener('click', () => {
      const newSelectedCompanyId = state.uiState.selectedCompanyId === company.id ? null : company.id;
      state.uiState.selectedCompanyId = newSelectedCompanyId;
      render(container, state);
    });
  });

  if (state.uiState.selectedCompanyId === null) {
    return;
  }

  const companyInfo = document.createElement('div');
  const selectedCompany = state.companies.find((company) => company.id === state.uiState.selectedCompanyId);
  companyInfo.textContent = selectedCompany.description;
  container.append(companyInfo);
};

export default (companies) => {
  const container = document.querySelector('.container');
  const state = {
    companies,
    uiState: {
      selectedCompanyId: null,
    },
  };
  render(container, state);
};
