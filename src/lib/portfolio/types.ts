// ===================================================
// Portfolio data types
// Source of truth: Samuel Teshale Terefe's CV
// ===================================================

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  problem: string;
  goal: string;
  approach: string;
  architecture: string;
  technologies: string[];
  challenges: string;
  implementation: string;
  result: string;
  lessons: string;
  highlights: string[];
  github: string | null;
  demo: string | null;
  image: string | null;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl: string | null;
  category: 'ai-ml' | 'cloud' | 'data' | 'programming';
}

export interface Achievement {
  id: string;
  title: string;
  competition: string;
  track: string;
  level: 'national' | 'regional' | 'international';
  prize: string;
  year: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  gpa: string;
  exitExam: string;
  location: string;
  highlights: string[];
}

export interface PhilosophyArea {
  title: string;
  description: string;
  icon: string;
}
