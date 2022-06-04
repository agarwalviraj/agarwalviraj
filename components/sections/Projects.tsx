import React from "react";
import Image from "next/image";
import Application from "../application";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";

const Projects = () => {
  const { allApplications } = useMainStore()!;
  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.PROJECTS,
  );

  const Project = () => {
    return (
      <div className="project">
        <div className="image">
          <Image
            src="/assets/projects/Sandesh.png"
            width={1920}
            height={960}
          ></Image>
        </div>
        <h4>Sandesh</h4>
      </div>
    );
  };

  return (
    <Application currentId={currentId}>
      <div className="projects main-section">
        <div className="text">
          <span>Here is a collection of my</span>

          <h1>Projects</h1>
          <div className="all-projects">
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </Application>
  );
};

export default Projects;
