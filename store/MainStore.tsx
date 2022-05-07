import React, { useContext, useState } from "react";
import { GoInfo } from "react-icons/go";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { BsStack } from "react-icons/bs";
import { IconType } from "react-icons";
import { About, Projects, ContactMe, TechStack } from "../components/sections";

export interface Application {
  name: string;
  icon: IconType;
  element: () => JSX.Element;
  isOpen?: boolean;
}

export const MainContentContext = React.createContext<{
  allApplications: Application[];
  setAllApplications: React.Dispatch<React.SetStateAction<Application[]>>;
} | null>(null);

const MainContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [allApplications, setAllApplications] = useState<Application[]>([
    { name: "About me", icon: GoInfo, element: About, isOpen: false },
    {
      name: "Projects",
      icon: AiOutlineFolderOpen,
      element: Projects,
      isOpen: false,
    },
    { name: "Tech Stack", icon: BsStack, element: TechStack, isOpen: false },
    {
      name: "Contact me",
      icon: IoIosContact,
      element: ContactMe,
      isOpen: false,
    },
  ]);

  return (
    <MainContentContext.Provider
      value={{ allApplications, setAllApplications }}
    >
      {children}
    </MainContentContext.Provider>
  );
};

export const useMainStore = () => useContext(MainContentContext);

export default MainContentProvider;
