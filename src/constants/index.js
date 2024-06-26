import {
  mobile,
  saliency,
  backend,
  ca,
  gcse,
  creator,
  web,
  javascript,
  java,
  colorflip,
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
  raystatic,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web
  },
  {
    title: "Android Developer",
    icon: mobile
  },
  {
    title: "Backend Developer",
    icon: backend
  },
  {
    title: "Artifical intelligence",
    icon: creator
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "Java",
    icon: java
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "MongoDb",
    icon: redux
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "figma",
    icon: figma
  }
];

const experiences = [
  {
    title: "Front-end Development",
    company_name: "Indra Institute",
    icon: raystatic,
    iconBg: "#383E56",
    date: "Jan 2024 - Sep 2024",
    points: [
      "Collaborated with designers to translate their ideas into user-friendly, responsive interfaces.",
      "Utilized Git and GitHub for version control, ensuring seamless collaboration and code management",
      "Implemented design features using CSS frameworks such as TailwindCSS and Bootstrap",
      "Developed a React-based interactive gallery carousel, resulting in a 75% increase in product engagement time.",
      "Worked with team members to ensure efficient cross-functional collaboration and project delivery."
    ]
  },
  {
    title: "Web Scraper and Tester",
    company_name: "Indra",
    icon: gcse,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Nov 2022",
    points: [
      "Developed and implemented automated test case software for extracting and analyzing university course data to check the readiness of curriculum in a 3-person team.",
      "Analyzed over 500 test cases for debugging Python scripts & utilized Beautiful Soup library for web crawling.",
      "Learned about HTML content of a webpage and reduced the number of requests sent each time to collect data, hence, improved the model by 20%.",
      "Successfully exported data from a JSON file to an Excel spreadsheet, by defining JSON as an object and making a GET request JSON API to automate the process."
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  }
];

const projects = [
  {
    name: "HTML CSS Portfilo",
    description:
      "Programming is a fascinating field where creativity meets logic. It involves writing instructions for computers using specialized languages like Python, Java, or C++. These languages allow developers to create software, apps, websites, and more. ",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient"
      },
      {
        name: "numpy",
        color: "green-text-gradient"
      },
      {
        name: "cv2",
        color: "pink-text-gradient"
      }
    ],
    image: saliency,
    source_code_link:
      "https://github.com/BatkaWert"
  },
  {
    name: "HTML CSS Portfilo",
    description:
      "Programming is a fascinating field where creativity meets logic. It involves writing instructions for computers using specialized languages like Python, Java, or C++. These languages allow developers to create software, apps, websites, and more. ",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient"
      },
      {
        name: "bootstrap",
        color: "green-text-gradient"
      },
      {
        name: "html",
        color: "pink-text-gradient"
      }
    ],
    image: ca,
    source_code_link: "https://github.com/BatkaWert"
  },
  {
    name: "HTML CSS Portfilo",
    description:
      "Programming is a fascinating field where creativity meets logic. It involves writing instructions for computers using specialized languages like Python, Java, or C++. These languages allow developers to create software, apps, websites, and more. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient"
      },
      {
        name: "javascript",
        color: "green-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient"
      }
    ],
    image: colorflip,
    source_code_link: "https://github.com/BatkaWert"
  }
];

export { services, technologies, experiences, testimonials, projects };
