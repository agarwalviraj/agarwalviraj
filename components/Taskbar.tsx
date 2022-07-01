import { useMainStore } from "../store/MainStore";
import { Launcher } from "./";

const Taskbar = () => {
  const {
    minimizeAll,
    setAllApplications,
    allApplications,
    active,
    setActive,
    appLauncher,
    setAppLauncher,
    recents,
    setRecents,
  } = useMainStore()!;

  return (
    <>
      {appLauncher && <Launcher />}
      <div className="taskbar">
        <div className="taskbar-icons">
          <div className="app-launcher">
            <img src="/Logo.svg" onClick={() => setAppLauncher(!appLauncher)} />
          </div>

          {allApplications
            .filter((app) => app.isOpen)
            .map((application, key) => (
              <application.icon
                key={key}
                onClick={() => {
                  setActive(application.slug);
                  const updatedApps = allApplications;
                  updatedApps.map((app) =>
                    app.slug == application.slug
                      ? (app.isMinimized = false)
                      : null,
                  );
                  setAllApplications(updatedApps);
                }}
                className={active == application.slug ? "active" : ""}
              />
            ))}
        </div>

        <div
          className="mobile-actions activites"
          onClick={() => setRecents(!recents)}
        />
        <div
          className="mobile-actions home"
          onClick={() => {
            minimizeAll();
            setRecents(false);
          }}
        />
        <div className="mobile-actions back" />
      </div>
    </>
  );
};

export default Taskbar;
