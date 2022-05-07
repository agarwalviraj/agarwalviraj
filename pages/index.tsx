import { NextPage } from "next";
import { useContext, useState } from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsStack } from "react-icons/bs";
import { GoInfo } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import { Wallpaper, Taskbar, Icons, Application } from "../components";
import { About, ContactMe, Projects, TechStack } from "../components/sections";
import { MainContentContext, slugs, useMainStore } from "../store/MainStore";

//System Tray
//Task Manager
//Settings

const Home: NextPage = () => {
  const { allApplications } = useContext(MainContentContext)!;

  return (
    <div className="main">
      <Wallpaper />
      <Taskbar />
      <Icons />
      {allApplications.map((app) => {
        if (app.isOpen) {
          if (app.slug == slugs.ABOUT) return <About />;
          if (app.slug == slugs.PROJECTS) return <Projects />;
          if (app.slug == slugs.TECHSTACK) return <TechStack />;
          if (app.slug == slugs.CONTACTME) return <ContactMe />;
        }
      })}
    </div>
  );
};

export default Home;
