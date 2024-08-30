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
    name: "Mysql",
    icon: mysql,
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
    title: "Petadopt - Full-Stack Web Application for Pet Adoption",
    company_name: "Personal Project",
    icon: petadopt,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Implemented Firebase Authentication, enhancing security and reducing unauthorized access attempts.",
      "Integrated AI-driven pet matching using Firebase Chatbot PaLM AI, improving match accuracy by 60%.",
      "Achieved real-time data management with Firebase Firestore, achieving 99.9% uptime and 50% faster data retrieval.",
      "Mastered a robust pet listing system with advanced search capabilities, leading to a dramatic improvement in user experience.",
      "Constructed an admin dashboard, increasing efficiency in managing pet listings and applications by 80%.",
      "Launched an innovative shopping cart solution that enhanced user engagement by enabling personalized product recommendations.",
      "Leveraged React Context API for state management, improving application performance by 40%.",
      "Conceptualized React Router for navigation, reducing page load times by 35%."
    ],
    skills: [
      "React",
      "Firebase",
      "Authentication",
      "Firestore",
      "AI",
      "Context API",
      "React Router"
    ],
  },
  {
    title: "Library Management System - Full-Stack Application",
    company_name: "Personal Project",
    icon: library,
    iconBg: "#E6DEDD",
    date: "January 2024 - May 2024",
    points: [
      "Implemented TypeScript and JavaScript, reducing code errors by 70% and improving overall system reliability by 40%.",
      "Innovated an in-memory indexing scheme, accelerating book retrieval speed and eliminating sequential scans.",
      "Championed Test-Driven Development (TDD), achieving 95% code coverage and reducing post-deployment bugs by 60%.",
      "Crafted RESTful APIs, enhancing data flow efficiency between front-end and back-end.",
      "Integrated Zod validation framework, fortifying server-side input validation and reducing invalid data entries by 90%.",
      "Advanced the functionality of React components, facilitating real-time updates that improved interaction speeds.",
      "Orchestrated MongoDB integration, optimizing data storage and retrieval speeds through efficient CRUD operations.",
      "Streamlined library processes, resulting in a 40% reduction in book check-out/check-in time and increase in user satisfaction."
    ],
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "MongoDB",
      "RESTful API",
      "TDD",
      "Zod"
    ],
  },
  {
    title: "Game Street - React-based Online Game Store",
    company_name: "Personal Project",
    icon: gameStreet,
    iconBg: "#383E56",
    date: "September 2023 - November 2023",
    points: [
      "Engineered a sophisticated cart management system using Fetch API, streamlining the checkout process and reducing cart abandonment by 30%.",
      "Leveraged JSON Server to mock RESTful API endpoints, accelerating development speed by 50% and enabling rapid prototyping.",
      "Simulated complex backend operations for game inventory, orders, and user data, reducing development time.",
      "Crafted an intuitive order management dashboard, improving order tracking efficiency by 60% and enhancing customer satisfaction.",
      "Implemented JWT-based authentication, bolstering user session security and reducing unauthorized access attempts.",
      "Designed responsive UI components, ensuring seamless user experience across devices and increasing mobile user retention by 45%."
    ],
    skills: [
      "React",
      "Fetch API",
      "JSON Server",
      "RESTful API",
      "JWT",
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
    date: "Present - June 2025",
    point: "Currently pursuing a Master's degree in Computer Science. Received Dean's List: Watson college Scholarship for fall 2023. Relevant coursework includes Database Systems, OS, Data Structure and Algorithm, Programming languages, and Distributed Systems.",
  },
  {
    title: "Medi-caps University",
    company_name: "Bachelor of Technology in Computer Science",
    icon: circle,
    iconBg: "#383E56",
    date: "August 2019 - May 2023",
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
    ],
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
  otherTechnologies,
  tools,
  experiences,
  projects,
  education,
};
