import { Application, useMainStore } from "../store/MainStore";

interface IconProps {
  app: Application;
  id: number;
}

const Icons = () => {
  const { allApplications, setAllApplications, setActive } = useMainStore()!;

  const Icon = ({ app, id }: IconProps) => {
    return (
      <div
        className="icon"
        onClick={() => {
          const updatedApp = allApplications;
          updatedApp[id].isOpen = !updatedApp[id].isOpen;
          setActive(allApplications[id].slug);
          setAllApplications([...updatedApp]);
        }}
      >
        {<app.icon />} <br />
        <span>{app.name}</span>
      </div>
    );
  };

  return (
    <div className="icons">
      {allApplications.map((app, idx) => (
        <Icon key={idx} app={app} id={idx} />
      ))}
    </div>
  );
};

export default Icons;
