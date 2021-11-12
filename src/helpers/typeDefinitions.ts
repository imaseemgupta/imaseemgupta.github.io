export interface Project {
  order?: number;
  id: string;
  name: string;
  image: string;
  description?: string;
  logo?: string;
  accent?: string;
  tags?: string[];
}

export interface Blog {
  id: string;
  name: string;
  image: string;
  date: string;
  description?: string;
  tags?: string[];
}
