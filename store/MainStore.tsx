import React, { useContext, useState } from "react";
import { IconType } from "react-icons";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsStack } from "react-icons/bs";
import { GoInfo } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import { ApplicationType, slugs } from "../utils/types";

export const MainContentContext = React.createContext<{
  allApplications: ApplicationType[];
  setAllApplications: React.Dispatch<React.SetStateAction<ApplicationType[]>>;

  active: slugs | undefined;
  setActive: React.Dispatch<React.SetStateAction<slugs | undefined>>;

  appLauncher: boolean;
  setAppLauncher: React.Dispatch<React.SetStateAction<boolean>>;

  closeAll: () => void;
} | null>(null);

const MainContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<slugs | undefined>();

  const [appLauncher, setAppLauncher] = useState(false);

  const [allApplications, setAllApplications] = useState<ApplicationType[]>([
    {
      name: "About me",
      icon: GoInfo,
      slug: slugs.ABOUT,
      isOpen: true,
      isMaximized: false,
      isMinimized: false,
    },
    {
      name: "Projects",
      icon: AiOutlineFolderOpen,
      slug: slugs.PROJECTS,
      isOpen: false,
      isMaximized: true,
      isMinimized: false,
    },
    {
      name: "Tech Stack",
      icon: BsStack,
      slug: slugs.TECHSTACK,
      isOpen: false,
      isMaximized: true,
      isMinimized: false,
    },
    {
      name: "Contact me",
      icon: IoIosContact,
      slug: slugs.CONTACTME,
      isOpen: false,
      isMaximized: true,
      isMinimized: false,
    },
  ]);

  const closeAll = () => {
    setAllApplications((oldApps) => {
      const newApps = oldApps.map((app) => {
        app.isOpen = false;
        return app;
      });
      return newApps;
    });
  };

  return (
    <MainContentContext.Provider
      value={{
        allApplications,
        setAllApplications,
        appLauncher,
        setAppLauncher,
        active,
        setActive,
        closeAll,
      }}
    >
      {children}
    </MainContentContext.Provider>
  );
};

export const useMainStore = () => useContext(MainContentContext);

export default MainContentProvider;
