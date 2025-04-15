export interface Project {
  id: 'pollo' | 'join' | 'pokedex';
  title: string;
  image: string;
  description: string;
  url?: string; 
  github?: string;
  tags?: string[];
}
