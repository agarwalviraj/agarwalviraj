import { useMainStore } from "../store/MainStore";
import { maximizeOne } from "../utils/actions";
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
      <Launcher />
      <div className="taskbar">
        <div className="taskbar-icons">
          <div className="app-launcher">
            <img src="/Logo.png" onClick={() => setAppLauncher(!appLauncher)} />
          </div>

          {allApplications
            .filter((app) => app.isOpen)
            .map((application, key) => (
              <application.icon
                key={key}
                onClick={() => {
                  setActive(application.slug);
                  maximizeOne(
                    application.slug,
                    allApplications,
                    setAllApplications,
                  );
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
