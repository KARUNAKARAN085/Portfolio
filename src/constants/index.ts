import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "E-Commerce Developer",
    icon: backend,
  },
  {
    title: "Tech Enthusiast",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Project Developer | Academic Capstone Project",
    companyName: "Kongu Engineering College",
    icon: starbucks,
    iconBg: "#eeeeeeff",
    date: "June 2021 – May 2022",
    points: [
      "Developed a Yoga Pose Estimation Web App using TensorFlow.js and PoseNet for real-time yoga pose detection.",
      "Designed intuitive UI with secure authentication linked to MongoDB.",
      "Applied deep learning concepts and web technologies to enhance user experience.",
      "Improved problem-solving and team collaboration skills during project execution.",
    ],
  },
  {
    title: "Full Stack Developer Trainee",
    companyName: "GUVI Geek Network (IITM Research Park)",
    icon: tesla,
    iconBg: "#383E56",
    date: "March 2024 - Sept 2024",
    points: [
      "Completed an intensive Full Stack Development program covering MERN stack (MongoDB, Express, React, Node.js).",
      "Built and deployed multiple mini-projects and capstone apps, strengthening hands-on coding and debugging skills.",
      "Explored API integration, responsive UI/UX, and real-world deployment on cloud platforms.",
      "Enhanced problem-solving mindset through continuous tinkering and self-learning challenges.",
    ],
  },
  {
    title: "Freelance Web Developer",
    companyName: "Independent Projects",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2023 – Present",
    points: [
      "Designed and developed dynamic websites for clients using WordPress, Shopify, and Zoho Commerce, focusing on performance and responsive UI.",
      "Customized themes and plugins to meet specific client needs, integrating WooCommerce, payment gateways, and third-party tools.",
      "Deployed and managed websites across various hosting platforms with expertise in server configuration, domain setup, and SSL management.",
      "Delivered optimized, SEO-friendly, and fully functional sites while maintaining ongoing client support and updates.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: " DACT IT SOLUTIONS",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining custom eCommerce platforms using Laravel, PHP, and MySQL, delivering optimized and scalable solutions for clients.",
      "Built a large-scale Laravel eCommerce project featuring product management, order tracking, secure payment integration, and real-time inventory control.",
      "Worked across platforms like WordPress, Shopify, Magento, Zoho Commerce, and WooCommerce, ensuring seamless performance and user-friendly design.",
      "Managed end-to-end deployments, server optimization, and hosting maintenance to enhance website performance and stability.",
      "Implemented RESTful APIs, responsive UI components, and basic SEO optimizations to improve visibility and engagement.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };