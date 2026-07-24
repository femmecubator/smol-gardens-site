type LevelOfDiffulty = 'Beginner' | 'Intermediate' | 'Advanced'

export type Project = {
  id: string
  goal_statement: string
  emoji: string
  project_tags: string[]
  headline: string
  description: string
  level_of_difficulty: LevelOfDiffulty
  roles: string[]
}

export type ProjectsConfigProps = {
  [key: string]: Project
}

const projectsConfigValue = {
  Akita: {
    id: 'akita',
    emoji: '😊',
    goal_statement:
      'Enabling Async Work using Github Pages and CSS Styled Templates',
    project_tags: ['Development', 'Github', 'Docusaurus', 'Documentation'],
    headline: 'Project Akita: Implement and Build Docusaurus CMS Site',
    description:
      'Join this squad to set up a contribution docs site to enable aspiring designers and devs to join open-source project workathons',
    level_of_difficulty: 'Beginner',
    roles: ['Developer', 'Content Designer'],
  },
  beagle: {
    id: 'beagle',
    emoji: '😎',
    goal_statement: 'Launch a Reusable Component Library on Storybook',
    project_tags: ['Development', 'Design', 'Github', 'DesignSystem', 'Figma'],
    headline: 'Project Beagle: Hacking A Design System Component Library',
    description:
      'Join this squad to build the Equity UI component library. Developers joining this project will learn to deploy components on Storybook and a sneak peak of the DS process. By the end of the project, a set of 5 components will be built under the WeSparkle Brand Theme.',
    level_of_difficulty: 'Intermediate',
    roles: ['Designer', 'React Developer', 'Developer'],
  },
  corgi: {
    id: 'corgi',
    emoji: '🤗',
    goal_statement: 'Mapping User Journey for Project Aggregator Landing Page',
    project_tags: ['Research', 'UX Design', 'Figma' ],
    headline: 'Project Corgi: Mapping User Journey for Project Aggregator Landing Page',
    description: 'Refine and future proof the site’s features driven by UX research methods like User Journey, JBTD and Empathy Maps',
    level_of_difficulty: 'Intermediate',
    roles: ['UX Designer', 'UX Researcher'],
  },
  foxhound: {
    id: 'foxhound',
    emoji: '😇',
    goal_statement: 'Define and research insights on Equitable Workforce and Hiring Culture',
    project_tags: ['Content Design', 'Design System', 'Figma'],
    headline: 'Project Foxhound: Design and Research on Inclusive Hiring Culture in Tech',
    description: 'Identify opportunities to mitigate issues in Tech hiring culture by redesigning an ideal job board. Enchance the site features driven by UX research methods',
    level_of_difficulty: 'Intermediate',
    roles: ['Strategist', 'UX Designer', 'Researcher'],
  },
  eurasier: {
    id: 'eurasier',
    emoji: '🥺',
    goal_statement: 'Decentralized Web Tools for Designers and Devs',
    project_tags: ['UX Design', 'Development', 'D.Web'],
    headline: 'Project Eurasier: Intro to Decentralized Web',
    description: 'In this workshop, participants will learn about Decentralized Web, its scope and principles',
    level_of_difficulty: 'Beginner',
    roles: ['UX designer', 'Strategist', 'Developer'],
  },
  greatdane: {
    id: 'greatdane',
    emoji: '🗺️',
    goal_statement: 'Equitable Mapping: Create a service that enables volunteers to submit Data Topics for visualization',
    project_tags: ['Data Science', 'Web Development', 'Data Viz'],
    headline: 'Project Great Dane: Convening with the community through Equitable Mapping platform',
    description: 'The goal of this hackathon is to improve the experience for an interactive map that incorporates key data indicators from Open Data NYC portal.',
    level_of_difficulty: 'Intermediate', 
    roles: ['Web Developer', 'Data Scientist', 'Researcher'], 
  },
  husky: {
    id: 'husky',
    emoji: '🗣',
    goal_statement: 'Conversational AI: Create a chatbot to support families of kids with Autism',
    project_tags: ['Gen AI', 'Content Strategy', 'UX Research'],
    headline: 'Project Husky: Using Conversational AI to Bridge Academia and Tech',
    description: 'In this project, the team needs to set up an initial landing page to communicate the goals and plan for a chatbot service.',
    level_of_difficulty: 'Beginner',
    roles: ['UX Designer', 'Content Designer', 'Researcher'],
  },
} satisfies ProjectsConfigProps

export default projectsConfigValue
