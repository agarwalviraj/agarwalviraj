import React from "react";
import Application from "../application";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";

const About = () => {
  const { allApplications } = useMainStore()!;
  const currentId = allApplications.findIndex((obj) => obj.slug == slugs.ABOUT);

  return (
    <Application currentId={currentId}>
      <div className="about-me main-section">
        <div className="text">
          <span>Hi, my name is</span>
          <h1>Viraj Agarawal</h1>
          <h3>I develop for the web.</h3>
          <p>
            I am Computer Science Engineering undergrature with interest in
            building amazing websites. I have experience with front-end as well
            as back-end engineering. I also love low level coding in languages
            like Rust, Java, C, C++
          </p>
        </div>
      </div>
    </Application>
  );
};

export default About;
