import { useMainStore } from "../store/MainStore";
import Image from "next/image";

const Taskbar = () => {
  const { closeAll, allApplications, active, setActive } = useMainStore()!;

  return (
    <div className="taskbar">
      <div className="taskbar-icons">
        <img src="/Logo.svg" className="app-launcher" />
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
      <div className="home-button" onClick={closeAll}>
        o
      </div>
    </div>
  );
};

export default Taskbar;
