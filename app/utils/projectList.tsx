import { ProjectType } from "../types";
import { RiFolderLockFill } from "react-icons/ri";
import { FaReact, FaSass, FaJs, FaNode } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiVite,
  SiEslint,
} from "react-icons/si";

import { SiShadcnui } from "react-icons/si";
import Image from "next/image";
import glowIcon from "public/icons/g.png";
import AiIcon from "public/icons/rocket-launch.svg";

export const ProjectList: ProjectType[] = [
  {
    icon: (
      <Image src={glowIcon} alt="GlowProject Icon" width={24} height={24} />
    ),
    title: "GlowProject",
    subtitle: "Skincare Frontend",
    technologies: [
      {
        name: "React",
        icon: <FaReact color="#61DAFB" size={16} />,
      },
      {
        name: "JavaScript",
        icon: <FaJs color="#F7DF1E" size={16} />,
      },
      {
        name: "Vite",
        icon: <SiVite color="#646CFF" size={16} />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss color="#06B6D4" size={16} />,
      },
      {
        name: "Shadcn",
        icon: <SiShadcnui color="#000000" size={16} />,
      },
      {
        name: "ESLint",
        icon: <SiEslint color="#4B32C3" size={16} />,
      },
    ],
    description:
      "Built a feature-rich skincare frontend using React 19, Vite, and Tailwind CSS, integrating dynamic AI-driven flows like skin analysis, product scanning, and progress tracking. Focused on component-based architecture, optimized performance, and seamless user interaction across routes.",
    imgUrl: "/photo/GlowProject.webp",
    videoUrl: "/videos/GlowProject.mp4",
    githubUrl: "https://github.com/sh1vdatt/GlowProject",
    websiteUrl: "https://gloww-project.web.app/",
  },
  {
    icon: <Image src={AiIcon} alt="AiSolution Icon" width={24} height={24} />,
    title: "Ai Solutions",
    subtitle: "Landing Page",
    technologies: [
      {
        name: "React",
        icon: <FaReact color="#61DAFB" size={16} />,
      },
      {
        name: "JavaScript",
        icon: <FaJs color="#F7DF1E" size={16} />,
      },
      {
        name: "Vite",
        icon: <SiVite color="#646CFF" size={16} />,
      },
      {
        name: "ESLint",
        icon: <SiEslint color="#4B32C3" size={16} />,
      },
    ],
    description:
      "Designed and developed a modern, responsive landing page with a user-friendly layout and clean UI. The page is dynamic, visually appealing, and optimized for performance. I focused on intuitive navigation and scalable design.",
    imgUrl: "/photo/AiSolutions.webp",
    videoUrl: "/videos/AiSolutions.mp4",
    githubUrl: "https://github.com/sh1vdatt/ai360",
    websiteUrl: "https://ai-solutions-312.netlify.app/",
  },
  {
    icon: <RiFolderLockFill size={24} />,
    title: "Authenticator",
    subtitle: "Authentication System",
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs color="#000000" size={16} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript color="#3178C6" size={16} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb color="#47A248" size={16} />,
      },
      {
        name: "Appwrite",
        icon: (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 9L12 5L21 9L12 13L3 9Z" fill="#F02E65" />
            <path d="M3 9V16L7 18V11L3 9Z" fill="#F02E65" />
            <path d="M12 13V20L21 16V9L12 13Z" fill="#F02E65" />
          </svg>
        ),
      },
    ],
    description:
      "Designed this full-stack authentication system with features like user login, signup, and session management. I focused on secure authentication, clean UI, and responsive design. The system is scalable and can be integrated into larger applications as a boilerplate.",
    imgUrl: "/photo/Authenticator.jpeg",
    videoUrl: "",
    githubUrl: "https://github.com/sh1vdatt/authorisation-project",
    websiteUrl: "",
  },
];
