/*=============== TAB BACKGROUND POSITION & RESIZE TAB BACKGROUND ===============*/
export const updateTabBgPosition = () => {
  const tabActive =
    document.querySelector<HTMLButtonElement>('.filter-tab-active');
  const tabBg = document.querySelector<HTMLDivElement>('.filters__tab-bg');
  if (!tabActive || !tabBg) return;

  const { clientWidth, offsetLeft } = tabActive;
  tabBg.style.width = `${clientWidth}px`;
  tabBg.style.transform = `translateX(${offsetLeft}px)`;
};

const handleResize = () => {
  let timer: number;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(updateTabBgPosition, 1000);
  };
};

export const handleMediaChange = ({ matches }: MediaQueryListEvent) =>
  matches
    ? window.addEventListener('resize', handleResize())
    : window.removeEventListener('resize', handleResize());

/*=============== UPDATE FILTER TABS ===============*/
const updateActiveTab = (target: HTMLElement) => {
  const activedTab = document.querySelector<HTMLElement>('.filter-tab-active');
  const activedTabContent =
    document.querySelector<HTMLElement>('.filters__active');
  const targetTab = target;
  const targetTabContent =
    target.dataset.target &&
    document.querySelector<HTMLElement>(target.dataset.target);

  if (!activedTab || !activedTabContent || !targetTabContent) return;

  activedTab.classList.remove('filter-tab-active');
  activedTabContent.classList.remove('filters__active');
  targetTab.classList.add('filter-tab-active');
  targetTabContent.classList.add('filters__active');

  updateTabBgPosition();
};

export const handleClick: EventListener = ({ target }) => {
  const targetElement = target as HTMLElement;
  if (targetElement && targetElement.hasAttribute('data-target'))
    updateActiveTab(targetElement);
};
