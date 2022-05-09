import { Dispatch, SetStateAction } from "react";
import { ApplicationType, slugs } from "./types";

export function close(
  allApplications: ApplicationType[],
  currentId: number,
  setActive: Dispatch<SetStateAction<slugs | undefined>>,
  setAllApplications: Dispatch<SetStateAction<ApplicationType[]>>,
) {
  const updatedApp = allApplications;
  updatedApp[currentId].isOpen = !updatedApp[currentId].isOpen;
  setActive(allApplications[currentId].slug);
  setAllApplications([...updatedApp]);
}
