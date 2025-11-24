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
  html,
  praveen,
  arun,
  shalini,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  bootstrap,
  expressjs,
  // magento,
  mysql,
  woocommerce,
  wordpress,
  // zohocommerce,
  meta,
  starbucks,
  tesla,
  shopify,
  freelance,
  carrent,
  jobit,
  tripguide,
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
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Magento",
  //   icon: magento,
  // },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Woocommerce",
    icon: woocommerce,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  // {
  //   name: "Zoho Commerce",
  //   icon: zohocommerce,
  // },
  {
    name: "Shopify",
    icon: shopify,
  },

  {
    name: "git",
    icon: git,
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
    icon: freelance,
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
      "He is reliable, fast, and consistently delivers high-quality work that is a strong asset to our team.",
    name: "Praveen",
    designation: "CEO",
    company: "DACT IT Solutions",
    image: praveen,
  },
  {
    testimonial:
      "A dedicated learner with solid fundamentals and great discipline to become a developer with real potential.",
    name: "Shalini",
    designation: "Mentor",
    company: "GUVI Geek Network (IITM Research Park)",
    image: shalini,
  },
  {
    testimonial:
      "He learns quickly, handles complex tasks confidently, and always maintains clean, efficient code.",
    name: "Arun",
    designation: "Senior Software Developer",
    company: "DACT IT Solutions",
    image: arun,
  },
];

const projects: TProject[] = [
  {
    name: "E-commerce",
    description:
      "A large-scale e-commerce platform offering home fitness equipment with an extensive catalog of 2000+ products and a smooth, user-focused shopping experience.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "orange-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/KARUNAKARAN085",
  },
  {
    name: "Event-management",
    description:
      "A modern event-management platform that streamlines wedding planning with tools for vendors, budgeting, task tracking, and full client coordination.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Express.js",
        color: "black-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/KARUNAKARAN085/WeddingWise-Backend",
  },
  {
    name: "Health Care",
    description:
      "A modern healthcare platform offering appointment booking, service browsing, and patient-focused medical care with smooth navigation & clean user experience.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/KARUNAKARAN085",
  },
];

export { services, technologies, experiences, testimonials, projects };