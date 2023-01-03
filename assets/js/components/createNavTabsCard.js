export const createNavTabsCard = (tabs, update) => {
  const navTabsContainer = document.querySelector('.filters__content');
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
  for (const tabElement of navTabsContainer.children) {
    tabs.find(({ name, id }) => {
      if (id.includes(tabElement.getAttribute('data-target')?.substring(1)))
        tabElement.textContent = name;
    });
  }
};
