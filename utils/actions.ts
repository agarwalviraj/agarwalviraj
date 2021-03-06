import { Dispatch, SetStateAction } from "react";
import { ApplicationType, slugs } from "./types";

export function close(
  allApplications: ApplicationType[],
  currentId: number,
  setActive: Dispatch<SetStateAction<slugs | undefined>>,
  setAllApplications: Dispatch<SetStateAction<ApplicationType[]>>,
  closeIfOpen = true,
) {
  const updatedApp = allApplications;
  updatedApp[currentId].isMinimized = false;
  updatedApp[currentId].isOpen = closeIfOpen
    ? !updatedApp[currentId].isOpen
    : true;
  setActive(allApplications[currentId].slug);
  setAllApplications([...updatedApp]);
}

export function maximize(
  allApplications: ApplicationType[],
  currentId: number,
  setActive: Dispatch<SetStateAction<slugs | undefined>>,
  setAllApplications: Dispatch<SetStateAction<ApplicationType[]>>,
) {
  const updatedApp = allApplications;
  updatedApp[currentId].isMaximized = !updatedApp[currentId].isMaximized;
  setActive(allApplications[currentId].slug);
  setAllApplications([...updatedApp]);
}
