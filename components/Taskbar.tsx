import { useMainStore } from "../store/MainStore";

const Taskbar = () => {
  const { closeAll, allApplications, active } = useMainStore()!;

  return (
    <div className="taskbar">
      <div className="taskbar-icons">
        {allApplications
          .filter((app) => app.isOpen)
          .map((application) => (
            <application.icon
              className={active == application.slug ? "active" : ""}
            />
          ))}
      </div>
      <div className="home-button" onClick={closeAll}>
        o
      </div>
    </div>
  );
};

export default Taskbar;
