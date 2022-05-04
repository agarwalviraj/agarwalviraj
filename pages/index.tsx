import { NextPage } from "next";
import { useState } from "react";
import { Desktop, Taskbar, Icons, Application } from "../components";

const Home: NextPage = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="main">
      <Desktop />
      <Taskbar />
      <Icons setActive={setActive} />
      {active && <Application />}
    </div>
  );
};

export default Home;
