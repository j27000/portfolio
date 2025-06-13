import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  notion,
  redux,
  tailwind,
  git,
  circle,
  cpp,
  mysql,
  dbms,
  github,
  vscode,
  postman,
  firebase,
  ts,
  eclipse,
  petadopt,
  library,
  gameStreet,
  node,
  express,
  mongodb,
  postgresql,
  redis,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },


];

const frontendTechnologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },

  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Typescript",
    icon: ts,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
];

const backendTechnologies = [
  {
    name: "Node.js",
    icon: node,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Redis",
    icon: redis,
  }
  
];

const tools = [
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },

  {
    name: "VS Code",
    icon: vscode,
  },

  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Eclipse",
    icon: eclipse,
  },

  {
    name: "Notion",
    icon: notion,
  },

];

const otherTechnologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "DBMS",
    icon: dbms,
  },
];

const experiences = [
  {
    title: "AI-Powered Code Navigator - Full-Stack AI Tool",
    company_name: "Personal Project",
   
    points: [
      "Spearheaded development of a full-stack AI tool enabling developers to upload and navigate codebases using natural language queries",
      "Visualized dependency graphs using D3.js to help engineers understand complex file relationships",
      "Integrated OpenAI's GPT API for semantic code search, enabling queries like 'Where is login handled?'",
      "Successfully parsed and indexed codebases with 1000+ files while maintaining optimal memory usage and search performance",
      "Implemented RESTful APIs for seamless integration with various development environments",
      "Developed an intuitive user interface for code exploration and visualization"
    ],
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "D3.js",
      "OpenAI GPT",
      "REST APIs"
    ],
  },
  {
    title: "PetAdopt - Pet Adoption Platform",
    company_name: "Personal Project",
    icon: petadopt,
    iconBg: "#383E56",
    points: [
      "Developed a responsive pet adoption platform with real-time updates for listings from 50+ shelter animals",
      "Integrated a Google PaLM-powered chatbot to recommend pets based on lifestyle compatibility",
      "Configured Firestore security rules and role-based access for staff, ensuring data protection and usability",
      "Tested across various devices including older tablets; applied UI optimizations for performance and accessibility",
      "Incorporated feedback from 10+ users to deliver features like saved searches and email alerts",
      "Implemented real-time updates and notifications for new pet listings"
    ],
    skills: [
      "React",
      "Firebase",
      "Firestore",
      "Google PaLM",
      "Tailwind CSS",
      "UI Optimization",
      "UX Design"
    ],
  },
  {
    title: "Game Street - Digital Game Store",
    company_name: "Personal Project",
    icon: gameStreet,
    iconBg: "#383E56",
    points: [
      "Designed and built a responsive platform tailored for digital game purchases, featuring product filtering, cart functionality, and secure checkout with JWT-based authentication",
      "Used JSON Server to simulate backend APIs, enabling agile front-end development and testing in a decoupled workflow",
      "Optimized app performance with lazy loading, dynamic code splitting, and Tailwind tuning to maintain smooth UX on slower devices and networks",
      "Gathered feedback from early 20+ users to refine error handling, improve cart persistence, and enhance checkout clarity",
      "Implemented secure payment processing and order tracking system",
      "Developed comprehensive product filtering and search functionality"
    ],
    skills: [
      "React",
      "Tailwind CSS",
      "JWT Auth",
      "JSON Server",
      "Web Performance",
      "UX Design",
      "Responsive Design"
    ],
  },
];

const education = [
  {
    title: "Binghamton University, State University Of New York",
    company_name: "Master of Science in Computer Science",
    icon: circle,
    iconBg: "#383E56",
    
    point: "Currently pursuing a Master's degree in Computer Science. Received Dean's List: Watson college Scholarship for fall 2023. Relevant coursework includes Database Systems, OS, Data Structure and Algorithm, Programming languages, and Distributed Systems.",
  },
  {
    title: "Medi-caps University",
    company_name: "Bachelor of Technology in Computer Science",
    icon: circle,
    iconBg: "#383E56",
    point: "Completed a Bachelor's degree in Computer Science. Coursework included programming languages (C, C++, JavaScript, TypeScript), web technologies (HTML, CSS, React, CSS Tailwind, Firebase), databases (MySQL, MongoDB), and other relevant technologies such as RESTful APIs, Git, JSON Server, Test-Driven Development (TDD), and Jest.",
  },
];



const projects = [
  {
    name: "Petadopt - Full-Stack Web Application",
    description:
      "A comprehensive pet adoption platform featuring Firebase Authentication, AI-driven pet matching, real-time data management with Firestore, and an admin dashboard. The application includes a robust pet listing system with advanced search capabilities and an innovative shopping cart solution.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
      {name:"Node.js",
        color: "pink-text-gradient",
      },
      {name:"Express.js",
        color: "pink-text-gradient",
      }    ],
    image: petadopt, // You'll need to import this image
    source_code_link: "https://github.com/j27000/Petadopt",
    project_live_link: "https://petadopt-xi.vercel.app/",
  },
  {
    name: "Library Management System",
    description:
      "A full-stack application implementing TypeScript and JavaScript, featuring an in-memory indexing scheme for efficient book retrieval. Utilizes Test-Driven Development, RESTful APIs, Zod validation, and MongoDB integration for optimized data storage and retrieval.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "RESTful API",
        color: "pink-text-gradient",
      },
      {
        name: "TDD",
        color: "pink-text-gradient",
      },
      {
        name: "Zod",
        color: "pink-text-gradient",
      },
      {name:"Node.js",
        color: "pink-text-gradient",
      },
      {name:"Express.js",
        color: "pink-text-gradient",
      }

    ],
    image: library, // You'll need to import this image
    source_code_link: "https://github.com/j27000/LibManagement",
    project_live_link: "https://github.com/j27000/LibManagement",
  },
  {
    name: "Game Street - Online Game Store",
    description:
      "A React-based online game store featuring a sophisticated cart management system, JSON Server for API mocking, and an intuitive order management dashboard. Implements JWT-based authentication and responsive UI components for seamless user experience across devices.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JSON Server",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
    ],
    image: gameStreet, // You'll need to import this image
    source_code_link: "https://github.com/j27000/gamestreet",
    project_live_link: "https://gamestreet-lac.vercel.app/",
  },
];

export {
  services,
  frontendTechnologies,
  backendTechnologies,
  otherTechnologies,
  tools,
  experiences,
  projects,
  education
};
