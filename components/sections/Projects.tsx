import React, { useState } from "react";
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
import { AiOutlineArrowLeft } from "react-icons/ai";

interface projectType {
  image: StaticImageData;
  name: string;
  description?: string[];
}

const Projects = () => {
  const { allApplications } = useMainStore()!;
  const [openProject, setOpenProject] = useState<null | projectType>(null);
  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.PROJECTS,
  );

  const allProjects: projectType[] = [
    {
      image: Sandesh,
      name: "Sandesh",
      description: [
        'Say sayonara to all those tedious nights spent in mailing. You can now send your "sandesh" at the click of a button. Presenting to you, the coolest mailing bud that helps you select, sort and schedule mails in a trice! And that\'s not even the best part yet! Sandesh helps you personalize your mailing lists and get your mails sent in a jiffy.',
        "This is your one-stop solution that makes mass mailing 100x easier. Get your sandesh home and wait for things to get 100x sweeter!",
        "The front-end of Sandesh is built in React.js and backend in Node.js all with typescript. The mails from sandesh are sent through the Amazon Web Services, Simple Emailing Service (AWS SES) and the mailing lists are stored in a mongodb database.",
      ],
    },
    {
      image: Mozofest,
      name: "Mozofest",
      description: [
        "The Official Event Website for Mozofest, the flagship event held by SRMKZILLA. Built on Next.js and typescript with discord OAuth and restricted access to dashboard to logged in users. More than 350 registrations through the website by college students and details gathered successfully",
      ],
    },
    {
      image: EventsPortal,
      name: "SRMKZILLA - Events Portal",
      description: [
        "This is the Events Portal build for managing and creating events for SRMKZILLA. This is built on Vue.js and typescript. This is used by SRMKZILLA to manage events and registrations for the events.",
        "First project built in Vue.js, I learnt how to integrate API and manage state in Vue.js. This project is still in development and will be used by SRMKZILLA to manage events and registrations for the events.",
        "This project is also integrated with Sandesh and it can create email lists in the sandesh database.",
      ],
    },

    {
      image: SupportPanel,
      name: "Supprt Panel",
      description: [
        "This is the support panel built for Edmingle to manage the issues of clients by the Support Team of the company. This was built during a 3 month internship at Edmingle.",
        "This is built on React.js with Material UI. Backend is built on PHP with MySQL database. 3 new API endpoints were added to the massive codebase of the company.",
        "This project is used by Edmingle to manage the issues of clients by the Support Team of the company.",
      ],
    },
    {
      image: WebsiteBuilder,
      name: "Website Builder",
      description: [
        "A Web App integrated in the Edmingle dashboard to allow new clients to make their own website and ease the process of deploying a new website for small scale institutes or solo teachers.",
        "This is a project built in collaboration with a large team. I contributed to the frontend of the project and built the website builder in React.js.",
        "I learnt how to work in a large team and how to manage a large codebase. I also learnt how to add drag and drop functionality in Javascript among other things.",
      ],
    },

    {
      image: Vital,
      name: "Vital",
      description: [
        "Through Vital, we aim to save an essential part of medicine- time. Heart rate, blood pressure, temperature and blood oxygen needs to be constantly monitored and measuring them is the first and foremost task carried out before conducting or deciding to perform any medical procedure.",
        "Updating the doctor or measuring them again takes up the few seconds that would be rather utilised in saving the patient.",
        "3rd Place winner in Hack The Mountains 2.0, the first Hackathon I participated in and won. Built on React.js with a backend in Node.js and Typescript and MongoDB.",
      ],
    },
  ];

  const Project = ({ project }: { project: projectType }) => {
    return (
      <div className="project" onClick={() => setOpenProject(project)}>
        <div className="image">
          <Image src={project.image} width={1920} height={960}></Image>
        </div>
        <h5>{project.name}</h5>
      </div>
    );
  };

  return (
    <Application currentId={currentId}>
      {!openProject ? (
        <div className="projects main-section">
          <div className="text">
            <span>Here is a collection of my awesome</span>

            <h1>Projects</h1>
          </div>
          <div className="all-projects">
            {allProjects.map((proj, id) => (
              <React.Fragment key={id}>
                <Project project={proj} />
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        <div className="projects main-section single-project">
          <div className="heading">
            <AiOutlineArrowLeft
              onClick={() => setOpenProject(null)}
              size={32}
            />
            <h3>{openProject.name}</h3>
          </div>

          <div className="description">
            {openProject.description &&
              openProject.description.map((desc, id) => (
                <h5 key={id}>{desc}</h5>
              ))}
          </div>

          <div
            className="image"
            style={{
              backgroundImage: `linear-gradient(to right,#0a192f, #36393fcc 66%,#508b917f) ,url(${openProject.image.src})`,
            }}
          ></div>
        </div>
      )}
    </Application>
  );
};

export default Projects;
