import React from "react";
import { Application } from "..";
import { useMainStore, slugs } from "../../store/MainStore";

const ContactMe = () => {
  const { allApplications } = useMainStore()!;
  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.CONTACTME,
  );
  return <Application currentId={currentId}>Contact</Application>;
};

export default ContactMe;
