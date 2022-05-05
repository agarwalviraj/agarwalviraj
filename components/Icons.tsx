import React, { Dispatch, SetStateAction, useState } from "react";
import { DiRedhat } from "react-icons/di";

interface IconProps {
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Icons = ({ setActive }: IconProps) => {
  const [applications, setApplications] = useState([
    { name: "About me", icon: DiRedhat },
    { name: "Projects", icon: DiRedhat },
  ]);

  const Icon = (app: any) => {
    return (
      <div className="icon" onClick={() => setActive((old) => !old)}>
        {app.icon()} <br />
        <span>{app.name}</span>
      </div>
    );
  };

  return (
    <div className="icons">
      {applications.map((app, idx) => (
        <Icon {...app} />
      ))}
    </div>
  );
};

export default Icons;
