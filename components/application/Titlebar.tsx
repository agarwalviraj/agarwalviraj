import { useMainStore } from "../../store/MainStore";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

interface TitlebarProps {
  currentId: number;
}

const Titlebar = ({ currentId }: TitlebarProps) => {
  const { active, setActive, allApplications, setAllApplications } =
    useMainStore()!;
  return (
    <div
      className="titlebar"
      onClick={() => setActive(allApplications[currentId].slug)}
      onMouseDown={() => setActive(allApplications[currentId].slug)}
    >
      <div className="titlebar-buttons">
        <AiOutlineClose
          onClick={() => {
            const updatedApp = allApplications;
            updatedApp[currentId].isOpen = !updatedApp[currentId].isOpen;
            setActive(allApplications[currentId].slug);
            setAllApplications([...updatedApp]);
          }}
        />
        <FiMaximize2 />
        <FiMinimize2 />
      </div>
      <span>{allApplications[currentId].name}</span>
      <div></div>
    </div>
  );
};

export default Titlebar;
