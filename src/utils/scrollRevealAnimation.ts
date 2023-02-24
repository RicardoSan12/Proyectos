import { ScrollReveal } from './scrollreveal.min';
let delay = 400;
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay,
});
const elementsClassName = [
  '.profile__perfil',
  '.toggle',
  '.profile__name',
  '.profile__about',
  '.profile__social',
  '.profile__button-cv',
  '.filters',
  '.filters__content',
];
export const loadScrollAnimation = () =>
  elementsClassName.forEach((elem) =>
    sr.reveal(elem, { delay: (delay += 100) })
  );
