export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  key: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS" },
      { name: "Tailwind" },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "PHP" },
      { name: "Laravel" },
      { name: "CakePHP" },
      { name: "CodeIgniter" },
      { name: "Python" },
      { name: "FastAPI" },
      { name: "REST APIs" },
    ],
  },
  {
    key: "databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Prisma" },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "Git" },
      { name: "Linux" },
      { name: "CentOS" },
      { name: "Vercel" },
      { name: "pm2" },
      { name: "Microsoft Teams" },
      { name: "Jira" },
      { name: "Google Cloud Platform" },
    ],
  },
  {
    key: "mobile",
    skills: [
      { name: "Flutter" },
    ],
  },
];
