import React from "react";
import { Application } from "..";
import { useMainStore, slugs } from "../../store/MainStore";

const Projects = () => {
  const { allApplications } = useMainStore()!;
  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.PROJECTS,
  );
  return <Application currentId={currentId}>Project</Application>;
};

export default Projects;
