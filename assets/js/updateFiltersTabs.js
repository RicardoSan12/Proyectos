/*=============== TAB BACKGROUND POSITION & RESIZE TAB BACKGROUND ===============*/
export const updateTabBgPosition = () => {
  const { clientWidth, offsetLeft } = document.querySelector('.filter-tab-active');
  const elementTabBg = document.querySelector('.filters__tab-bg');
  elementTabBg.style.width = `${clientWidth}px`;
  elementTabBg.style.transform = `translateX(${offsetLeft}px)`;
};

const handleResize = () => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(updateTabBgPosition, 1000);
  };
};

export const handleMediaChange = ({ matches }) =>
  matches
    ? window.addEventListener('resize', handleResize())
    : window.removeEventListener('resize', handleResize());

/*=============== UPDATE FILTER TABS ===============*/
const updateActiveTab = (target) => {
  const activeTab = document.querySelector('.filter-tab-active');
  const activeTabContent = document.querySelector('.filters__active');
  const targetTab = target;
  const targetTabContent = document.querySelector(target.dataset.target);

  activeTab.classList.remove('filter-tab-active');
  activeTabContent.classList.remove('filters__active');
  targetTab.classList.add('filter-tab-active');
  targetTabContent.classList.add('filters__active');

  updateTabBgPosition();
};

export const handleClick = ({ target }) => {
  if (target.hasAttribute('data-target')) updateActiveTab(target);
};
