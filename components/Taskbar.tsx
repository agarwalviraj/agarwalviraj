import { useMainStore } from "../store/MainStore";
import { Launcher } from "./";

const Taskbar = () => {
  const {
    closeAll,
    allApplications,
    active,
    setActive,
    appLauncher,
    setAppLauncher,
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
                onClick={() => setActive(application.slug)}
                className={active == application.slug ? "active" : ""}
              />
            ))}
        </div>

        <div className="mobile-actions activites" onClick={closeAll} />
        <div className="mobile-actions home" onClick={closeAll} />
        <div className="mobile-actions back" onClick={closeAll} />
      </div>
    </>
  );
};

export default Taskbar;
