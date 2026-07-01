
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFlutter,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiMongoose,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiNpm,
  SiPnpm,
  SiVercel,
  SiRender,
  SiGsap,
} from "react-icons/si";


import MotionIcon from "../icons/MotionIcon";
import RestApiIcon from "../icons/RestApiIcon";
import MulterIcon from "../icons/MulterIcon";
import VsCodeIcon from "../icons/VsCodeIcon";

export const toolkit = [
  {
    id: "frontend",
    title: "Frontend",
    color: "#4FD1FF",
    layout: {
      colSpan:2,
      rowSpan:1
    },

    tools: [
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: SiCss,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "GSAP",
        icon: SiGsap,
        color: "#88CE02",
      },
      {
        name: "Motion",
        icon: MotionIcon,
        color: "#0055FF",
      },
      {
        name: "Flutter",
        icon: SiFlutter,
        color: "#02569B",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "#646CFF",
      },
    ],
  },

  {
    id: "backend",
    title: "Backend",
    color: "#5CF38A",
    layout: {
      colSpan:1,
      rowSpan:1
    },

    tools: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#5FA04E",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "#FFFFFF",
      },
      {
        name: "REST API",
        icon: RestApiIcon,
        color: "#00D8FF",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        color: "#D63AFF",
      },
      {
        name: "Multer",
        icon: MulterIcon,
        color: "#4CAF50",
      },
    ],
  },

  {
    id: "database",
    title: "Database",
    color: "#00D2A0",
    layout: {
      colSpan:1,
      rowSpan:1
    },

    tools: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "Mongoose",
        icon: SiMongoose,
        color: "#880000",
      },
    ],
  },

  {
    id: "tools",
    title: "Tools",
    color: "#FFB347",
    layout: {
      colSpan:2,
      rowSpan:1
    },

    tools: [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#FFFFFF",
      },
      {
        name: "VS Code",
        icon: VsCodeIcon,
        color: "#007ACC",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "#F24E1E",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
      },
      {
        name: "npm",
        icon: SiNpm,
        color: "#CB3837",
      },
      {
        name: "pnpm",
        icon: SiPnpm,
        color: "#F69220",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "#FFFFFF",
      },
      {
        name: "Render",
        icon: SiRender,
        color: "#46E3B7",
      },
    ],
  },
];