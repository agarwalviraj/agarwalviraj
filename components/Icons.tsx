import React, { Dispatch, SetStateAction, useState } from "react";

interface IconProps {
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Icons = ({ setActive }: IconProps) => {
  const [applications, setApplications] = useState([{ name: "About me" }]);

  const Icon = (app: any) => {
    return (
      <div className="icon" onClick={() => setActive((old) => !old)}>
        {app.name} <br />
        <span>Hello sub</span>
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
