import {ContentTab} from '../types'

interface Params {
  updateTabLanguage: { tabElements: HTMLCollection; tabs: ContentTab[]; }
  createNavTabsCard: { tabs: ContentTab[]; update: boolean; }
}

const updateTabLanguage = ({tabElements, tabs}: Params['updateTabLanguage']) => {
  for (const tabElement of tabElements) {
    tabs.find(({ name, id }) => {
      const targetId = tabElement.getAttribute('data-target')
      if (targetId && id.includes(targetId.substring(1))) tabElement.textContent = name;
    });
  }
};

export const createNavTabsCard = ({tabs, update}:Params['createNavTabsCard']) => {
  const navTabsContainer = document.querySelector('.filters__content');
  if(!navTabsContainer) return 
  if (!update) {
    const html = `
        ${tabs
        .map(({ name, id }, index) => {
            const isActive = index === 0 ? 'filter-tab-active' : '';
            return `
        <button class="filters__button ${isActive}" data-target="#${id}">
            ${name}
        </button>`;
        })
        .join('')}
        <div class="filters__button filters__tab-bg"></div>`;
     return (navTabsContainer.innerHTML = html);
  }

  updateTabLanguage({tabElements: navTabsContainer.children, tabs});
};
