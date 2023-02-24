import {Job} from '../types'

export function createJobCard(job: Job) {
    const { position, company, startDate, endDate, description } = job;
    const html = `
      <h3 class="jobs__title">${position}</h3>
      <h4 class="jobs__subtitle jobs__subtitle--u">
        ${company}
      </h4>
      <p class="jobs__subtitle">
        ${startDate} - ${endDate}
      </p>
      <p  class="jobs__subtitle jobs__subtitle--info">${description}</p>`;
    return { className: 'jobs__box', html };
  }