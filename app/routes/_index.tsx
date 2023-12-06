import { useEffect, useMemo, useState } from "react";
import { Icons, Taskbar, Wallpaper, Recents, Help } from "../components";
import {
  About,
  ContactMe,
  Projects,
  TechStack,
  Terminal,
} from "../components/sections";
import { useMainStore } from "../store/MainStore";
import { toggleApp } from "../utils/actions";
import { slugs } from "../utils/types";
import { useNavigate, useSearchParams } from "@remix-run/react";

//System Tray
//Task Manager
//Settings

const Home = () => {
  const {
    allApplications,
    recents,
    helpShown,
    setHelpShown,
    setActive,
    setAllApplications,
  } = useMainStore()!;
  const [step, setStep] = useState(1);
  const [hydrated, setHydrated] = useState(false);

  const memoApp = useMemo(
    () => ({
      app: allApplications.map((app) => ({
        isOpen: app.isOpen,
        slug: app.slug,
      })),
    }),
    [allApplications],
  );

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("apps");
    const openApps =
      typeof query == "string" ? query?.split(",").map((app) => app) : query;

    Object.keys(slugs).map((key, id) => {
      if (openApps?.includes(key.toLowerCase())) {
        toggleApp(allApplications, id, setActive, setAllApplications, false);
      }
    });
  }, []);

  useEffect(() => {
    const filtered = memoApp.app.filter((app) => app.isOpen);
    const list = filtered.reduce(
      (app, old) => `${app}${old.slug.toLocaleLowerCase()},`,
      "",
    );
    setSearchParams({ apps: list.toString() });
  }, [memoApp]);

  useEffect(() => {
    setHydrated(true);
    setHelpShown(!!localStorage.getItem("help-shown"));

    function viewHeight() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    viewHeight();
    window.addEventListener("resize", viewHeight);
    return () => document.removeEventListener("resize", viewHeight);
  }, []);

  useEffect(() => {
    if (step == 0) {
      setHelpShown(true);
      localStorage.setItem("help-shown", "true");
    }
  }, [step]);

  return (
    <div className="main">
      {hydrated && !helpShown && step > 0 && (
        <Help step={step} setStep={setStep} />
      )}
      <Wallpaper />
      <Taskbar />
      <Icons />
      {recents && <Recents />}
      {allApplications.map((app, key) => {
        if (app.isOpen && !app.isMinimized) {
          if (app.slug == slugs.ABOUT) return <About key={key} />;
          if (app.slug == slugs.PROJECTS) return <Projects key={key} />;
          if (app.slug == slugs.TECHSTACK) return <TechStack key={key} />;
          if (app.slug == slugs.CONTACTME) return <ContactMe key={key} />;
          if (app.slug == slugs.TERMINAL) return <Terminal key={key} />;
        }
      })}
    </div>
  );
};

export default Home;
