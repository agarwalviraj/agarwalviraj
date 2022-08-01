import { useMainStore } from "../store/MainStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { About, ContactMe, Projects, TechStack } from "./sections";
import { slugs } from "../utils/types";
import { minimize, minimizeOne } from "../utils/actions";

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
              setActive(application.slug);
              minimizeOne(
                application.slug,
                allApplications,
                setAllApplications,
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
