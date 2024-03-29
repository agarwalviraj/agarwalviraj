import { Dispatch, SetStateAction } from "react";
import { ApplicationType, slugs } from "./types";

export function toggleApp(
  allApplications: ApplicationType[],
  currentId: number,
  setActive: Dispatch<SetStateAction<slugs | undefined>>,
  setAllApplications: Dispatch<SetStateAction<ApplicationType[]>>,
  toggle = true,
) {
  setAllApplications((old) => {
    if (old[currentId].isMinimized) old[currentId].isMinimized = false;
    old[currentId].isOpen = toggle ? !old[currentId].isOpen : true;
    if (old[currentId].isOpen || !toggle) {
      console.log({ slug: allApplications[currentId].slug });

      setActive(allApplications[currentId].slug);
    }
    return [...old];
  });
}

export function close(
  allApplications: ApplicationType[],
  currentId: number,
  setAllApplications: Dispatch<SetStateAction<ApplicationType[]>>,
) {
  const updatedApp = allApplications;
  updatedApp[currentId].isOpen = false;
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

export function minimize(
  currentId: number,
  setAllApplications: Dispatch<SetStateAction<ApplicationType[]>>,
  toggle = true,
) {
  setAllApplications((old) => {
    old[currentId].isMinimized = toggle ? !old[currentId].isMinimized : true;
    return old;
  });
}

export function maximizeOne(
  slug: ApplicationType["slug"],
  allApplications: ApplicationType[],
  setAllApplications: Dispatch<SetStateAction<ApplicationType[]>>,
  oneFocus: boolean = false,
  setRecents?: Dispatch<boolean>,
) {
  const updatedApps = allApplications;
  oneFocus && updatedApps.map((app) => (app.isMinimized = true));
  updatedApps.map((app) => {
    app.slug == slug ? (app.isMinimized = false) : null;
  });
  setAllApplications(updatedApps);
  setRecents && setRecents(false);
}
