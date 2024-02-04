import {project1, project2, project3, project4} from "../assets/images";
import {css, javascript, react, github, ruby, tailwind, bootstrap, database1, nodejs, expressjs, mongodb, firebase1,supabase,nextjs,mysql,postgresql } from "../assets/icons";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-me", label: "About Me" },
  { href: "#demo", label: "Demo" },
  { href: "#blog", label: "Blog" },
];

export const iconsImages = [
  { icon: css, alt: "icon-css" },
  { icon: javascript, alt: "icon-javascript" },
  { icon: react, alt: "icon-react" },
  { icon: firebase1, alt: "icon-firebase" },
  { icon: github, alt: "icon-github" },
  { icon: expressjs, alt: "icon-expressJS" },
  { icon: nodejs, alt: "icon-node" },
  { icon: mongodb, alt: "icon-mongodb" },
  { icon: tailwind, alt: "icon-tailwind" },
  { icon: bootstrap, alt: "icon-bootstrap" },
  { icon: ruby, alt: "icon-ruby" },
  { icon: database1, alt: "icon-database" },
  { icon: postgresql, alt:"icon-postgresql" },
  { icon: mysql, alt: "icon-mysql" },
  { icon: supabase, alt: "icon-supabase"},
  { icon: nextjs, alt:"icon-next"}
]

export const projects = [

  { photo: project1 , 
    linkWeb:"https://main--zippy-centaur-55d177.netlify.app/",
    description:"Collaborating with my teammates, we embarked on an exhilarating journey fueled by teamwork and problem-solving, with the goal of designing and developing a responsive website.",
    tools: "html, css",
    link:"https://github.com/Maeokubo/Team-collaboration"
  },
  { photo: project4, 
    linkWeb:"/",
    description:"We worked with version control systems like Git, enhancing team collaboration on a React project. Additionally, wrote server-side code using Node.js, and designed and implemented database schemas using PostgreSQL. Implement Scrum framework to improve team collaboration, productivity and deliver project on-time",
    tools:"react, tailwind css, postgresql, superdbase",
    link:"/"
  },
  { photo: project3,
    linkWeb:"https://nike-website-drab-chi.vercel.app/", 
    description:"Replicating the homepage layout of the Nike website involved cloning key components such as the header, navigation menu, featured products, and footer sections. This included ensuring responsiveness across a variety of screen sizes and devices, including desktops, tablets, and mobile phones",
    tools:"react, tailwind css",
    link:"https://github.com/Maeokubo/Nike-website"
  },
  { photo: project2,
    linkWeb:"https://raw.githack.com/Maeokubo/project-youtube-clone/main/youtube.html", 
    description:"My first project is an exciting milestone, and it marks the beginning of my growth and learning in the field of development and each project is an opportunity to learn, improve, and showcase my skills.",
    tools:"html, css ",
    link:"https://github.com/Maeokubo/Project-Youtube-Page?tab=readme-ov-file"
  },

]
