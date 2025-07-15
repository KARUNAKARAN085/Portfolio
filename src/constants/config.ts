type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Karunakaran R — Portfolio",
    fullName: "Karunakaran R",
    email: "karunakaranrk2001@mail.com",
  },
  hero: {
    name: "Karunakaran",
    p: ["MERN Stack Developer | GitHub | Wordpress | WooCommerce | Shopify | Zoho commerce | Let’s Build Something Great"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact Me.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Web Developer with a B.E. in Computer Science and practical experience
               in building responsive, scalable applications using the MERN stack. 
               I also bring hands-on expertise in WordPress, WooCommerce, Shopify, 
               and Zoho Commerce, delivering tailored solutions for diverse client needs. 
               With a strong foundation in full stack development, a continuous 
               learning mindset, and a collaborative approach, I’m eager to contribute 
               to impactful projects, grow professionally, and explore new opportunities 
               in innovative environments.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience 
      through real-world examples of my work. Each project is briefly 
      described with links to code repositories. It reflects my ability 
      to solve complex problems, work with different technologies, 
      and manage projects effectively.`,
    },
  },
};
