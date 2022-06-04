import { useMainStore } from "../store/MainStore";

const Taskbar = () => {
  const { closeAll } = useMainStore()!;
  return (
    <div className="taskbar">
      <div className="home-button" onClick={closeAll}>
        o
      </div>
    </div>
  );
};

export default Taskbar;
