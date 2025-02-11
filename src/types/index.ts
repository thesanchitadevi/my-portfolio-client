export interface IProject {
  _id: string;
  title: string;
  description: string;
  liveLink: string;
  techStack: string[];
  image: string;
}

export interface IBlog {
  _id: number;
  title: string;
  date: string;
  category: string;
  content: string;
  image: string;
}
