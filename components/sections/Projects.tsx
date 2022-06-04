import React from "react";
import Application from "../application";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";

const Projects = () => {
  const { allApplications } = useMainStore()!;
  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.PROJECTS,
  );

  return (
    <Application currentId={currentId}>
      <div className="projects main-section">
        <div className="text">
          <span>Here is a collection of my</span>
          <h1>Projects</h1>
        </div>
      </div>
    </Application>
  );
};

export default Projects;
