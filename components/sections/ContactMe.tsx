import React from "react";
import Application from "../application";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGhost,
} from "react-icons/fa";

const ContactMe = () => {
  const { allApplications } = useMainStore()!;
  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.CONTACTME,
  );
  return (
    <Application currentId={currentId}>
      <div className="main-section contact-me">
        <div className="text">
          <span></span>
          <h1>Contact Me</h1>
          <div className="contact">
            <div className="profile">
              <img src="/assets/profile.png" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:viraj.ag007@gmail.com"
              >
                viraj.ag007@gmail.com
              </a>
            </div>
            <div className="details">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/agarwalviraj"
              >
                <FaGithub size={18} />
                <span>GitHub</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aedin.com/in/agarwalviraj"
              >
                <FaLinkedin size={18} />
                <span>Linkedin</span>
              </a>
            </div>
            <div className="details">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/agarwalviraj"
              >
                <FaTwitter size={18} />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Application>
  );
};

export default ContactMe;
