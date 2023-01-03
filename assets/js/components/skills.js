const createSkillCard = (skillName) => ` 
  <div class="skills__data">
    <i class="ri-checkbox-circle-line"></i>
    <div>
      <h3 class="skills__name">${skillName}</h3>
      <span class="skills__level" id="10">Intermediario</span>
    </div>
  </div>`;

export function createSkillCategoryCard(skill) {
  const { category, skills } = skill;
  const html = `
    <h3 class="skills__title">${category}</h3>
    <div class="skills__box">
      ${skills?.map(createSkillCard).join('')}
    </div>`;
  return { className: 'skills__category', html };
}