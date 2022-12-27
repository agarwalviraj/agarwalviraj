import { useMainStore } from "../../store/MainStore";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { FaRegWindowMinimize } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { toggleApp, maximize, minimize } from "../../utils/actions";
import { RefObject } from "react";

interface TitlebarProps {
  currentId: number;
  AppRef: RefObject<HTMLDivElement>;
}

const Titlebar = ({ currentId, AppRef }: TitlebarProps) => {
  const { setActive, allApplications, setAllApplications } = useMainStore()!;
  return (
    <div
      className="titlebar"
      onClick={() => setActive(allApplications[currentId].slug)}
      onMouseDown={() => setActive(allApplications[currentId].slug)}
    >
      <div className="titlebar-buttons">
        <AiOutlineClose
          className="close"
          onClick={() =>
            toggleApp(allApplications, currentId, setActive, setAllApplications)
          }
        />
        <FiMaximize2
          className="maximize"
          onClick={() => {
            if (AppRef.current) {
              AppRef.current!.style.transitionProperty = "all";
              setTimeout(() => {
                if (AppRef.current)
                  AppRef.current.style.transitionProperty = "garbageValue";
              }, 1000);
              maximize(
                allApplications,
                currentId,
                setActive,
                setAllApplications,
              );
            }
          }}
        />

        <FaRegWindowMinimize
          className="minimize"
          onClick={() => minimize(currentId, setAllApplications)}
        />
      </div>
      <span className="title">{allApplications[currentId].name}</span>
      <div></div>
    </div>
  );
};

export default Titlebar;
