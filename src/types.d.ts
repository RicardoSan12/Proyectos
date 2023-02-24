export interface Project {
  image: string;
  type: string;
  name: string;
  status: string;
  description: string;
  source: string;
  link: string;
}
export interface Skill {
  category: string;
  skills: string[];    
}
export interface Job {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Profile {
  image: string;
  name: string;
  about: string;
  profession: string;
  socialLinks: { name: string; link: string; }[];
  cvName: string;
}

export type TypeContentItem = Project | Skill | Job


export interface ContentTab {
  name: string;
  id: string;
}