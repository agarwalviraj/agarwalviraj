import { NextPage } from "next";
import { Icons, Taskbar, Wallpaper } from "../components";
import { About, ContactMe, Projects, TechStack } from "../components/sections";
import { useMainStore } from "../store/MainStore";
import { slugs } from "../utils/types";

//System Tray
//Task Manager
//Settings

const Home: NextPage = () => {
  const { allApplications } = useMainStore()!;

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
