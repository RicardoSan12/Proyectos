import { createProjectCard } from './components/projects';
import { createSkillCategoryCard } from './components/skills';
import { createJobCard } from './components/jobs';
import { createCards } from './components/cards';
import { createProfileCard } from './components/profile';
import { createOrUpdateNavTabsCard } from './components/createOrUpdateNavTabsCard';

import { updateTabBgPosition } from './updateFiltersTabs';
import { updateLangData } from './data';

const profileContainer = document.querySelector('.profile'),
  projectContainer = document.getElementById('projects'),
  skillContainer = document.getElementById('skills'),
  jobContainer = document.getElementById('jobs');

export const updateLang = ({ lang, update = false }) => {
  const { jobs, skills, projects, tabs, profile } = updateLangData(lang);
  localStorage.setItem('selected-lang', lang);

  createCards(jobContainer, jobs, createJobCard, update);
  createCards(skillContainer, skills, createSkillCategoryCard, update);
  createCards(projectContainer, projects, createProjectCard, update);

  createProfileCard(profileContainer, profile)
  createOrUpdateNavTabsCard(tabs, update);

  updateTabBgPosition();
};
 
