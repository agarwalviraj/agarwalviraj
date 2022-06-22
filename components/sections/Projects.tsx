import React from "react";
import Image, { StaticImageData } from "next/image";
import Application from "../application";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";
import {
  Sandesh,
  Mozofest,
  SupportPanel,
  Vital,
  EventsPortal,
  WebsiteBuilder,
} from "../../public/assets/projects";

interface projectType {
  image: StaticImageData;
  name: string;
}

const Projects = () => {
  const { allApplications } = useMainStore()!;
  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.PROJECTS,
  );

  const allProjects: projectType[] = [
    { image: Sandesh, name: "Sandesh" },
    { image: Mozofest, name: "Mozofest" },
    { image: EventsPortal, name: "SRMKZILLA - Events Portal" },

    { image: SupportPanel, name: "Supprt Panel" },
    { image: WebsiteBuilder, name: "Website Builder" },

    { image: Vital, name: "Vital" },
  ];

  const Project = ({ name, image }: projectType) => {
    return (
      <div className="project">
        <div className="image">
          <Image src={image} width={1920} height={960}></Image>
        </div>
        <h5>{name}</h5>
      </div>
    );
  };

  return (
    <Application currentId={currentId}>
      <div className="projects main-section">
        <div className="text">
          <span>Here is a collection of my awesome</span>

          <h1>Projects</h1>
        </div>
        <div className="all-projects">
          {allProjects.map((proj, id) => (
            <React.Fragment key={id}>
              <Project name={proj.name} image={proj.image} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </Application>
  );
};

export default Projects;
