import { useMainStore } from "../store/MainStore";
import { toggleApp } from "../utils/actions";

const Launcher = () => {
  const {
    allApplications,
    setAllApplications,
    active,
    setActive,
    appLauncher,
    setAppLauncher,
  } = useMainStore()!;
  return (
    <div className={`launcher ${appLauncher ? "active" : "not-active"}`}>
      {allApplications.map((application, key) => (
        <div
          key={key}
          onClick={() => {
            toggleApp(
              allApplications,
              key,
              setActive,
              setAllApplications,
              false,
            );
            setAppLauncher(false);
          }}
          className="launcher-icon"
        >
          <application.icon
            size={32}
            className={`icon ${active == application.slug && "active"}`}
          />
          {application.name}
        </div>
      ))}
    </div>
  );
};

export default Launcher;
