import { NextPage } from "next";
import { useEffect } from "react";
import { Icons, Taskbar, Wallpaper } from "../components";
import { About, ContactMe, Projects, TechStack } from "../components/sections";
import { useMainStore } from "../store/MainStore";
import { slugs } from "../utils/types";

//System Tray
//Task Manager
//Settings

const Home: NextPage = () => {
  const { allApplications } = useMainStore()!;
  useEffect(() => {
    function viewHeight() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    viewHeight();
    window.addEventListener("resize", viewHeight);
    return () => document.removeEventListener("resize", viewHeight);
  }, []);

  return (
    <div className="main">
      <Wallpaper />
      <Taskbar />
      <Icons />
      {allApplications.map((app, key) => {
        if (app.isOpen) {
          if (app.slug == slugs.ABOUT) return <About key={key} />;
          if (app.slug == slugs.PROJECTS) return <Projects key={key} />;
          if (app.slug == slugs.TECHSTACK) return <TechStack key={key} />;
          if (app.slug == slugs.CONTACTME) return <ContactMe key={key} />;
        }
      })}
    </div>
  );
};

export default Home;
