import React, { Dispatch, SetStateAction, useContext, useState } from "react";

import {
  Application,
  MainContentContext,
  useMainStore,
} from "../store/MainStore";

import { GoInfo } from "react-icons/go";
import { About, Projects, ContactMe, TechStack } from "../components/sections";

interface IconProps {
  app: Application;
  id: number;
}

const Icons = () => {
  const { allApplications, setAllApplications } = useMainStore()!;

  const Icon = ({ app, id }: IconProps) => {
    return (
      <div
        className="icon"
        onClick={() => {
          const test = allApplications;
          const open = test[id].isOpen;
          test[id].isOpen = !open;
          setAllApplications([...test]);
        }}
      >
        {<app.icon />} <br />
        <span>{app.name}</span>
      </div>
    );
  };

  return (
    <div className="icons">
      {allApplications.map((app, idx: number) => (
        <Icon app={app} id={idx} />
      ))}
    </div>
  );
};

export default Icons;
