import React, { useContext, useState } from "react";
import { IconType } from "react-icons";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsStack } from "react-icons/bs";
import { GoInfo } from "react-icons/go";
import { IoIosContact } from "react-icons/io";

export enum slugs {
  ABOUT = "about",
  PROJECTS = "projects",
  TECHSTACK = "techStack",
  CONTACTME = "contactMe",
}
export interface Application {
  name: string;
  icon: IconType;
  slug: slugs;
  isOpen: boolean;
}

export const MainContentContext = React.createContext<{
  allApplications: Application[];
  setAllApplications: React.Dispatch<React.SetStateAction<Application[]>>;

  active: slugs | undefined;
  setActive: React.Dispatch<React.SetStateAction<slugs | undefined>>;
} | null>(null);

const MainContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<slugs | undefined>();

  const [allApplications, setAllApplications] = useState<Application[]>([
    { name: "About me", icon: GoInfo, slug: slugs.ABOUT, isOpen: false },
    {
      name: "Projects",
      icon: AiOutlineFolderOpen,
      slug: slugs.PROJECTS,
      isOpen: false,
    },
    { name: "Tech Stack", icon: BsStack, slug: slugs.TECHSTACK, isOpen: false },
    {
      name: "Contact me",
      icon: IoIosContact,
      slug: slugs.CONTACTME,
      isOpen: false,
    },
  ]);

  return (
    <MainContentContext.Provider
      value={{ allApplications, setAllApplications, active, setActive }}
    >
      {children}
    </MainContentContext.Provider>
  );
};

export const useMainStore = () => useContext(MainContentContext);

export default MainContentProvider;
