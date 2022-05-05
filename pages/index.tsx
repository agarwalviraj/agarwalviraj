import { NextPage } from "next";
import { useContext, useState } from "react";
import { Desktop, Taskbar, Icons, Application } from "../components";
import { useMainStore } from "../store/MainStore";

const Home: NextPage = () => {
  const { application, setApplication } = useMainStore();
  return (
    <div className="main">
      <Desktop />
      <Taskbar />
      <Icons setActive={setApplication} />
      {application && <Application />}
    </div>
  );
};

export default Home;
