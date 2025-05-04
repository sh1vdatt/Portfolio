import { iconType } from "../types";
import {
  TypescriptSVG,
  JavascriptSVG,
  ReactSVG,
  NextSVG,
  TailwindSVG,
  ShadcnSVG,
  AppwriteSVG,
  MongoDBSVG,
  GitSVG,
} from "../components/ui/icons";

let color: string = "#9ca3af";
export const techonologyIconList: iconType[] = [
  {
    name: "TypeScript",
    icon: <TypescriptSVG color={color} size={35} />,
  },
  {
    name: "JavaScript",
    icon: <JavascriptSVG color={color} size={35} />,
  },
  {
    name: "React",
    icon: <ReactSVG color={color} size={35} />,
  },
  {
    name: "Next.js",
    icon: <NextSVG color={color} size={35} />,
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindSVG color={color} size={35} />,
  },
  {
    name: "Shadcn UI",
    icon: <ShadcnSVG color={color} size={35} />,
  },
  {
    name: "Appwrite",
    icon: <AppwriteSVG color={color} size={35} />,
  },
  {
    name: "MongoDB",
    icon: <MongoDBSVG color={color} size={35} />,
  },
  {
    name: "Git",
    icon: <GitSVG color={color} size={35} />,
  },
];
