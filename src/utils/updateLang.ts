import { createProjectCard } from '../components/project';
import { createSkillCategoryCard } from '../components/skill';
import { createJobCard } from '../components/job';
import { createCards } from '../components/cards';
import { createProfileCard } from '../components/profile';
import { createNavTabsCard } from '../components/createNavTabsCard';

import { updateTabBgPosition } from './updateFiltersTab';
import { updateLangData } from '../data';

const profileContainer = document.querySelector<HTMLElement>('.profile'),
  projectContainer = document.getElementById('projects'),
  skillContainer = document.getElementById('skills'),
  jobContainer = document.getElementById('jobs');

interface Params {
  lang: string;
  update: boolean;
}

export const updateLang = ({ lang, update = false }: Params) => {
  const { jobs, skills, projects, tabs, profile } = updateLangData(lang);
  localStorage.setItem('selected-lang', lang);

  if (jobContainer && skillContainer && projectContainer && profileContainer) {
    createCards({
      container: jobContainer,
      contentItems: jobs,
      createCard: createJobCard,
      updateLang: update,
    });
    createCards({
      container: skillContainer,
      contentItems: skills,
      createCard: createSkillCategoryCard,
      updateLang: update,
    });
    createCards({
      container: projectContainer,
      contentItems: projects,
      createCard: createProjectCard,
      updateLang: update,
    });

    createProfileCard(profileContainer, profile);
    createNavTabsCard({ tabs, update });
  }
  updateTabBgPosition();
};
