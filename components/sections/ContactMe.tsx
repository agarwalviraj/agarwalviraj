import React from "react";
import Application from "../application";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";

const ContactMe = () => {
  const { allApplications } = useMainStore()!;
  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.CONTACTME,
  );
  return <Application currentId={currentId}>Contact</Application>;
};

export default ContactMe;
