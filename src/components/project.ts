import {Project} from '../types'

function createProjectCard(project:Project) {
  const { image, name, type, description, source, link } = project;
  const html = `
    <img src="${image}" alt="${name}" class="projects__img" />
    <div class="projects__modal">
      <span class="projects__subtitle">${type}</span>
      <h3 class="projects__title">${name}</h3>
      <p class="projects__subtitle">${description}</p>
      <a href="${link}" class="projects__button button" target="_blank">
        <i class="ri-link"></i>
      </a>
      <a href="${source}" class="projects__button button" target="_blank">
        <i class="ri-github-line"></i>
      </a>
    </div>`;
  return { className: 'projects__card', html };
}
  
  export { createProjectCard };
  