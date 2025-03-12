import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Shubh Patel",
  logo: "/logo-transparent.svg",
  email: "shubhp1801@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/iamshubhp",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/shubh-patel-4572872a4/",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Email",
    url: "mailto:shubhp1801@gmail.com",
    icon: "mdi:email",
    external: true,
  },
  {
    title: "Resume",
    url: "/sp.pdf",
    icon: "mdi:file-download",
    external: true,
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Shubh Patel",
    description:
      "Full time student from Canada who also loves turning data into actionable insights through AI and machine learning",
    image: identity.logo,
  },
  role: "Data Science & ML Engineer",
  description:
    "👋🏽 I'm Shubh Patel, a full time student from Canada who also loves turning data into actionable insights through AI and machine learning.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Shubh Patel",
    description:
      "Full time student from Canada who also loves turning data into actionable insights through AI and machine learning",
    image: identity.logo,
  },
  subtitle:
    "Data Science & ML Engineer crafting intelligent solutions with code",
  about: {
    description: `
Hi, I'm Shubh Patel, a passionate Data Science and Machine Learning Engineer and a full-time Computer Science student. My journey into AI and Data Science started in my early university years when I worked on a small project analyzing trends in student performance data. I was fascinated by how raw numbers could be transformed into meaningful insights, and from that moment, I knew I wanted to dive deeper into machine learning, algorithms, and statistical analysis.

<br >As a student balancing coursework and real-world experience, I’ve worked on various projects involving predictive modeling, data visualization, and AI-driven automation. Whether it’s optimizing datasets for insights or building models to solve practical problems, I love the challenge of working with complex data.

I specialize in developing machine learning models, creating AI pipelines, and deploying scalable solutions. My tech stack includes Python, TensorFlow, Scikit-learn, SQL, and cloud platforms like AWS, Google Cloud, and Microsoft Azure.

<br> When I’m not coding, I’m exploring new advancements in AI, cloud engineering, and data engineering to stay ahead of industry trends.

<br> Beyond tech, I have a huge passion for traveling and exploring new places. `,
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Student Assistant - ML Research",
        company: {
          name: `Assisted in research on image classification techniques using pre-trained models like ResNet and EfficientNet for
                  applications in document processing.
                  Implemented data preprocessing pipelines and augmentation strategies that improved model accuracy by 15% on
                  limited datasets.
                  Built and evaluated machine learning models using scikit-learn and PyTorch, documenting experimental results
                  and creating visualizations for performance analysis.`,
          image: "/logo-transparent.svg",
          url: "https://github.com/iamshubhp",
        },

        date: "May,2024 - August,2024",
      },
    ],
  },
  connect: {
    description: `I would love to connect for any available opportunities.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Shubh Patel",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Student Exam Performance Prediction",
      description:
        "This project is a web application built using Flask that predicts students' math scores based on various input features such as gender, race/ethnicity, parental education level, lunch type, test preparation course status, reading score, and writing score. The dataset used for training the model is sourced from Kaggle: Students Performance in Exams.",
      image: "/dataset-cover1.jpg",
      url: "https://github.com/iamshubhp/ml-student-performance-exam",
    },
    {
      title: "Wine Quality Prediction",
      description:
        "This project is an end-to-end Machine Learning tutorial that predicts wine quality using the Wine Quality dataset available on kaggle.",
      image: "/dataset-cover2.jpg",
      url: "https://github.com/iamshubhp/DS-wine-quality",
    },
    {
      title: "DeepSeekR1 code helper",
      description:
        "An AI-powered coding assistant built with Streamlit and LangChain, utilizing DeepSeek models via Ollama",
      image: "/agent1.jpg",
      url: "https://github.com/iamshubhp/DeepSeekR1-code-helper",
    },
  ],
};
