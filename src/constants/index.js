import {project1, project2, project3,} from "../assets/images";
import {css, javascript, react, github, ruby, tailwind, bootstrap, wordpress, database1, nodejs, expressjs, mongodb, firebase1 } from "../assets/icons";

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
  { icon: wordpress, alt: "icon-wordpress" },
  { icon: tailwind, alt: "icon-tailwind" },
  { icon: bootstrap, alt: "icon-bootstrap" },
  { icon: ruby, alt: "icon-ruby" },
  { icon: database1, alt: "icon-database" },
]

export const projects = [

  { photo: project1 , 
    linkWeb:"https://main--zippy-centaur-55d177.netlify.app/",
    description:"Designed and responsive website operating system in 4-person in 2 day hackathon",
    tools: "html, css",
    link:"https://github.com/Maeokubo/Team-collaboration"
  },
  { photo: "", 
    linkWeb:"/",
    description:"Coming Soon...",
    tools:"react.js, tailwind css, sql, express, superdbase",
    link:"/"
  },
  { photo: project3,
    linkWeb:"https://nike-website-drab-chi.vercel.app/", 
    description:"Nike",
    tools:"react.js, tailwind css",
    link:"https://github.com/Maeokubo/Nike-website"
  },
  { photo: project2,
    linkWeb:"https://raw.githack.com/Maeokubo/project-youtube-clone/main/youtube.html", 
    description:"Youtube",
    tools:"html, css ",
    link:"https://github.com/Maeokubo/Project-Youtube-Page?tab=readme-ov-file"
  },

]
