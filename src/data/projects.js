import DogStudio from '../assets/projects/DogStudio.png'
import k72Clone from '../assets/projects/k72.png'
import codeSync from '../assets/projects/CodeSync.png'
import tubeLens from '../assets/projects/TubeLens.png'
import portfolio from '../assets/projects/Portfolio.png'

export const projects = [
    {
        id: 1,
        title: "DogStudio Clone",
        slug: "dogstudio-clone",

        category: "Frontend",
        status: "Completed",
        type: 'Clone',

        year: "2026",
        featured: false,

        description:
            "A recreation of the DogStudio website focused on mastering GSAP animations, smooth scrolling, responsive layouts, and modern UI interactions.",

        image: DogStudio,

        techStack: [
            "React",
            "GSAP",
            "Tailwind CSS",
            "Lenis",
            "Vite",
        ],

        github: "https://github.com/BilalKhalifa/DogStudio_Clone",

        live: 'http://dog-studio-clone-by-bk.vercel.app/',
    },

    {
        id: 2,
        title: "Developer Portfolio",
        slug: "developer-portfolio",

        category: "Frontend",
        type: "Original",
        status: "In Progress",

        year: "2026",
        featured: true,

        description:
            "A modern, interactive developer portfolio showcasing my projects, technical skills, and journey through immersive animations, responsive design, and contemporary web technologies.",

        image: portfolio,

        techStack: [
            "React",
            "Tailwind CSS",
            "GSAP",
            "Framer Motion",
            "Swiper.js",
            "Vite"
        ],

        github: "https://github.com/BilalKhalifa/my_portfolio",

        live: null,
    },

    {
        id: 3,
        title: "K72 Clone",
        slug: "k72-clone",

        category: "Frontend",
        status: "Completed",
        type: "Clone",

        year: "2026",
        featured: false,

        description:
            "A recreation of the K72 website to explore modern frontend animation techniques, smooth scrolling, and interactive user experiences using React and GSAP.",

        image: k72Clone,

        techStack: [
            "React",
            "GSAP",
            "Tailwind CSS",
            "Lenis",
            "Vite",
        ],

        github: "https://github.com/BilalKhalifa/React-frontend-learning/tree/gsap-project",

        live: 'https://b22-ae5q.onrender.com/',
    },

    {
        id: 4,
        title: "CodeSync",
        slug: "codesync",

        category: "Full Stack",
        type: "Original",
        status: "In Progress",

        year: "2026",
        featured: false,

        description:
            "A real-time collaborative coding platform developed to learn WebSockets, Docker-based development, and scalable deployment workflows.",

        image: codeSync,

        techStack: [
            "React",
            "Node.js",
            "Express",
            "Socket.io",
            "Docker",
            "MongoDB",
            "Tailwind CSS"
        ],

        github: "https://github.com/BilalKhalifa/CodeSync",

        live: null,
    },

    
    {
        id: 5,
        title: "TubeLens",
        slug: "tubelens",

        category: "AI",
        type: "Original",
        status: "In Progress",

        year: "2026",
        featured: true,

        description:
            "An AI-powered YouTube analytics platform that provides creators with actionable insights, performance analysis, and intelligent recommendations through an interactive dashboard.",

        image: tubeLens,

        techStack: [
            "Flutter",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Python",
            "Flask",
            "OpenAI"
        ],

        imageFit: "contain",

        github: "https://github.com/BilalKhalifa/tube_lens_frontend",

        live: null,
    }
]