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
    title: 'Karunakaran R — Portfolio',
    fullName: 'Karunakaran R',
    email: 'karunakaranrk2001@mail.com',
  },
  hero: {
    name: 'Karunakaran',
    p: [
      'MERN Stack Developer | Wordpress | WooCommerce | Shopify | Zoho commerce | GitHub | Let’s Build Something Great',
    ],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact Me.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `Web Developer with a B.E. in Computer Science and practical experience in building responsive,
 scalable web applications using the MERN stack. Along with a solid foundation in full stack
 development, I have hands-on expertise in WordPress, WooCommerce, Shopify, Laravel, and
 Zoho Commerce. My academic background and professional experience fuel my passion for
 developing innovative solutions that solve real-world challenges. I’m driven by continuous
 learning, teamwork, and the ambition to contribute to a forward-thinking organization that
 values growth, creativity, and technology-driven success.`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Professional Journey.',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `The following projects highlight my technical expertise and hands-on experience through practical, real-world work. Each project is described clearly with its key objectives, challenges, and the technologies used. Some projects include code repositories where applicable. These examples reflect my ability to build efficient solutions, handle complex problems, work across various tech stacks, and deliver projects with a strong focus on performance and quality.`,
    },
  },
};
