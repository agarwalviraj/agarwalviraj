import { Swiper, SwiperSlide } from "swiper/react";
import { useMainStore } from "../store/MainStore";
import { maximizeOne } from "../utils/actions";
import { slugs } from "../utils/types";
import { About, ContactMe, Projects, TechStack, Terminal } from "./sections";

const Recents = () => {
  const { allApplications, active, setActive, setAllApplications, setRecents } =
    useMainStore()!;
  return (
    <Swiper className="recents" dir="rtl" navigation={false}>
      {allApplications
        .filter((app) => app.isOpen)
        .map((application, key) => (
          <SwiperSlide
            className="single-app"
            key={key}
            onClick={() => {
              console.log(application.slug);
              setActive(application.slug);
              maximizeOne(
                application.slug,
                allApplications,
                setAllApplications,
                true,
                setRecents,
              );
            }}
          >
            {application.slug == slugs.PROJECTS ? (
              <Projects />
            ) : application.slug == slugs.ABOUT ? (
              <About />
            ) : application.slug == slugs.TECHSTACK ? (
              <TechStack />
            ) : application.slug == slugs.CONTACTME ? (
              <ContactMe />
            ) : application.slug == slugs.TERMINAL ? (
              <Terminal />
            ) : null}
            <application.icon
              onClick={() => setActive(application.slug)}
              className={active == application.slug ? "active" : ""}
              size={36}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Recents;