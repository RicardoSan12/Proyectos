export function createCards(container, items, createCard, updateLang) {
  if (updateLang) container.innerHTML = '';
  const fragment = document.createDocumentFragment();
  items?.forEach((item) => {
    const article = document.createElement('article');
    const { className, html } = createCard(item);
    article.classList.add(className);
    article.innerHTML = html;
    fragment.appendChild(article);
  });
  container?.appendChild(fragment);
}