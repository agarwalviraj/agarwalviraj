import React from "react";
import Application from "../application";
import { useMainStore, slugs } from "../../store/MainStore";

const TechStack = () => {
  const { allApplications } = useMainStore()!;
  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.TECHSTACK,
  );
  return <Application currentId={currentId}>Tech Stack</Application>;
};

export default TechStack;
