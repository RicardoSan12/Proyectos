import './assets/scss/styles.scss';
import { handleClick, handleMediaChange } from './src/utils/updateFiltersTab';
import { loadScrollAnimation } from './src/utils/scrollRevealAnimation';
import { updateLang } from './src/utils/updateLang';

/*=============== CHANGING IDIOM ===============*/
const langButton = document.getElementById('lang-button');
let selectedLang =
  localStorage.getItem('selected-lang') || navigator.language.substring(0, 2);

const isLangEn = selectedLang === 'en';
if (langButton && isLangEn) langButton.classList.add('lang-en');

const toggleLang = () => {
  selectedLang = selectedLang === 'en' ? 'es' : 'en';
  langButton?.classList.toggle('lang-en');
  return selectedLang;
};

const handleClickLangButton = () => {
  updateLang({ lang: toggleLang(), update: true });
};

updateLang({ lang: selectedLang, update: false });
langButton?.addEventListener('click', handleClickLangButton);

/*=============== UPDATE FILTER TABS ===============*/
const filtersContainer = document.querySelector('.filters');
filtersContainer?.addEventListener('click', handleClick);

/*====== RESIZE TAB BACKGROUND =======*/
const md = window.matchMedia('(max-width: 500px)');
md.addEventListener('change', handleMediaChange);

/*=============== DARK LIGHT THEME ===============*/
const body = document.body;
const themeButton = document.getElementById('theme-button');

const toggleTheme = () => {
  const isDark = body.classList.toggle('dark-theme');
  themeButton &&
    (themeButton.innerHTML = isDark
      ? '<i class="ri-moon-line"></i>'
      : '<i class="ri-sun-line"></i>');
  localStorage.setItem('selected-theme', isDark ? 'dark-theme' : '');
};

const selectedTheme = localStorage.getItem('selected-theme');
if (!selectedTheme) toggleTheme();

themeButton?.addEventListener('click', toggleTheme);

/*=============== SCROLL REVEAL ANIMATION ===============*/
loadScrollAnimation();
