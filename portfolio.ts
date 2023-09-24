import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Ravibhushan Kumar',
  title: "Hi all, I'm Ravibhushan",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
  resumeLink:
    'https://drive.google.com/file/d/1vUWTP7bH5tnp40m5RvN_-WAduLpg2Iqk/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'ravibhushankumarsonu',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://localhost.com',
  linkedin: 'https://www.linkedin.com/in/ravibhushan-kumar-6ab881b0/',
  github: 'https://github.com/ravibhushankumarsonu',
  instagram: 'https://www.instagram.com/ravibhushanpatel/',
  facebook: 'https://www.instagram.com/ravibhushanpatel/',
  twitter: 'https://twitter.com/Ravibhushan1998',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    }
  ],
};

export const SkillBars: SkillBarsType[] = [
  
  {
    Stack: 'Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Frontend/Design', 
    progressPercentage: '80', 
  },
  
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'IIT(ISM) Dhanbad',
    subHeader: 'Electronics and Communication Engineering',
    duration: 'July 2014 - June 2018',
    desc: 'Participated in the research of XXX and published 3 papers.',
    grade: 'Grade A',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Developer',
    company: 'Flipkart',
    companyLogo: '/img/icons/common/flipkart_logo.jpg',
    date: 'July 2018 – Present',
    desc: 'Working here.',
  }
];

export const projects: ProjectType[] = [
  {
    name: 'Upcoming',
    desc: 'Under Developments',
    github: 'https://localhost.com',
    link: 'https://localhost.com',
  },
  {
    name: 'Upcoming',
    desc: 'Upcoming',
    github: 'https://localhost.com',
  }
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Place Holders',
    feedback:
      'Details are Pending',
  }
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Ravibhushan Kumar',
  description:
    'A passionate Full Software Developer.',
  author: 'Ravibhushan Kumar',
  image: 'https://avatars.githubusercontent.com/u/13804540?v=4',
  url: 'https://localhost.com',
  keywords: [
    'Ravi',
    'Ravibhushan',
    'Ravibhushan Kumar',
  ],
};
