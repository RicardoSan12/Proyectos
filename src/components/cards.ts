import {TypeContentItem} from '../types'

interface Params {
    container: HTMLElement;
    contentItems: TypeContentItem[];
    createCard(item:TypeContentItem): {className: string, html: string}
    updateLang: boolean
}

export function createCards({container, contentItems, createCard, updateLang}: Params) {
    if (updateLang) container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    contentItems?.forEach((item) => {
      const article = document.createElement('article');
      const { className, html } = createCard(item);
      article.classList.add(className);
      article.innerHTML = html;
      fragment.appendChild(article);
    });
    container?.appendChild(fragment);
}
