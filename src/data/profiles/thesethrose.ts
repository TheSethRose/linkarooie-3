import type { Profile, Tag, RelatedWork, Citation } from '../../types';
// import avatarImage from '../../assets/images/seth_avatar.jpg';
// import bannerImage from '../../assets/images/seth_banner.jpg';
// import ogImage from '../../assets/images/seth_og.jpg';

// No interfaces needed - we'll just use the objects directly

export const sethrose: Profile = {
  name: "Seth Rose",
  username: "thesethrose",
  description: "Transforming Process Chaos into Elegant Automations.",
  avatarUrl: "https://pbs.twimg.com/profile_images/1900455883198369792/orGHun_l_400x400.jpg",
  bannerUrl: "https://pbs.twimg.com/profile_banners/691253/1736653898/1500x500",
  ogImageUrl: "",
  ogTitle: "Seth Rose - AI Consultant and Developer",
  ogDescription: "Connect with Seth Rose, a passionate advocate for AI integration in daily life and software solutions. Explore my projects, content, and social links all in one place.",
  bio: "AI Consultant and Developer specializing in automation. E/acc advocate and techno-optimist based in Anna, TX.",
  tags: [
    {
      name: "AI/ML",
      description: "AI systems mimic human intelligence, while Machine Learning enables computers to learn from data without explicit programming. Together, they power predictive analytics, NLP, and autonomous systems.",
      citation: {
        title: "What is Artificial Intelligence?",
        url: "https://www.ibm.com/topics/artificial-intelligence"
      },
      related_work: [
        {
          title: "Agent-Chat",
          url: "https://github.com/TheSethRose/agent-chat",
          description: "AI-powered conversational agent using Llama 3.2 model and Phidata framework."
        }
      ]
    },
    {
      name: "Automation",
      description: "Automation refers to technology applications where human input is minimized through predefined rules and AI. It streamlines workflows, reduces errors, and enhances efficiency across various technical and business domains.",
      citation: {
        title: "What is Automation?",
        url: "https://www.ibm.com/topics/automation"
      },
      related_work: [
        {
          title: "Agent-Chat",
          url: "https://github.com/TheSethRose/agent-chat",
          description: "An automated AI-powered chat assistant built using advanced LLM technology."
        }
      ]
    },
    {
      name: "TypeScript",
      description: "TypeScript is a strongly typed programming language that builds on JavaScript, adding static type definitions. It provides better tooling, error-catching, and scalability for large applications while maintaining JavaScript compatibility.",
      citation: {
        title: "TypeScript: JavaScript with Syntax for Types",
        url: "https://www.typescriptlang.org/"
      },
      related_work: [
        {
          title: "Portfolio Website",
          url: "https://www.sethrose.dev",
          description: "Personal portfolio website built with TypeScript and modern frameworks."
        }
      ]
    },
    {
      name: "Next.js",
      description: "Next.js is a React framework that enables server-side rendering, static site generation, and other performance optimizations for React applications. It simplifies the development of fast, SEO-friendly web applications.",
      citation: {
        title: "Next.js: The React Framework",
        url: "https://nextjs.org/"
      },
      related_work: [
        {
          title: "Portfolio Website",
          url: "https://www.sethrose.dev",
          description: "Personal portfolio website built with Next.js and TypeScript."
        }
      ]
    },
    {
      name: "React.js",
      description: "React is a JavaScript library for building user interfaces with a component-based architecture. It efficiently updates and renders components when data changes, making it ideal for dynamic web applications.",
      citation: {
        title: "React – A JavaScript library for building user interfaces",
        url: "https://reactjs.org/"
      }
    },
    {
      name: "Python",
      description: "Python is a high-level, interpreted programming language known for its readability and versatility. It's widely used in AI/ML, web development, data analysis, automation, and scientific computing.",
      citation: {
        title: "About Python",
        url: "https://www.python.org/about/"
      },
      related_work: [
        {
          title: "Agent-Chat",
          url: "https://github.com/TheSethRose/agent-chat",
          description: "Python-based AI chat assistant using Llama 3.2 model and Phidata framework."
        }
      ]
    },
    {
      name: "E/acc",
      description: "Effective Accelerationism (e/acc) is a techno-optimist philosophy that advocates for rapid technological advancement to solve humanity's greatest challenges. It emphasizes innovation, growth, and progress through market mechanisms and reduced barriers.",
      citation: {
        title: "Effective Accelerationism",
        url: "https://effectiveaccelerationism.org/"
      }
    },
    {
      name: "APIs",
      description: "APIs (Application Programming Interfaces) define how software components should interact, allowing different applications to communicate with each other. They enable the creation of integrated software ecosystems and streamlined data exchange.",
      citation: {
        title: "What are APIs?",
        url: "https://aws.amazon.com/what-is/api/"
      }
    }
  ],
  isPublic: true,
  showInDirectory: true,
  socialLinks: [
    { platform: "github", url: "https://github.com/TheSethRose" },
    { platform: "x-twitter", url: "https://twitter.com/TheSethRose" },
    { platform: "bluesky", url: "https://bsky.app/profile/sethrose.dev" },
    { platform: "linkedin", url: "https://linkedin.com/in/sethlrose" },
    { platform: "mastodon", url: "https://techhub.social/@sethrose" },
    { platform: "threads", url: "https://www.threads.net/@thesethrose" }
  ],
  links: [
    {
      id: "portfolio",
      title: "My Portfolio",
      description: "Professional portfolio and project showcase.",
      url: "https://sethrose.dev",
      icon: "fa-solid fa-briefcase"
    },
    {
      id: "links",
      title: "Link Collection",
      description: "Aggregated links and resources.",
      url: "https://links.sethrose.dev",
      icon: "fa-solid fa-link"
    },
    {
      id: "github",
      title: "GitHub Projects",
      description: "My code repositories and open-source contributions.",
      url: "https://github.com/TheSethRose",
      icon: "fa-brands fa-github"
    },
    {
      id: "ai-tools",
      title: "AI & Automation",
      description: "Projects exploring AI, machine learning, and automation.",
      url: "https://github.com/TheSethRose/agent-chat",
      icon: "fa-solid fa-robot"
    },
    // Hidden links
    {
      id: "personal",
      title: "Personal Journey",
      description: "My experience overcoming cancer and transforming my approach to technology and life.",
      url: "https://sethrose.dev/personal",
      icon: "fa-solid fa-heart",
      hidden: true
    }
  ],
  achievements: [
    {
      id: "cancer-free",
      title: "One Year Cancer-Free",
      description: "Completed treatment for Diffuse Large B-Cell Lymphoma and reached the one-year remission milestone.",
      date: "Feb 2025",
      icon: "fa-solid fa-ribbon",
      url: "#",
      showFullDate: false
    },
    {
      id: "certifications",
      title: "ServiceNow Administrator Certification",
      description: "Earned the ServiceNow Administrator certification in 2018",
      date: "2018",
      icon: "fa-solid fa-certificate",
      url: "#",
      showFullDate: false
    }
  ]
};
