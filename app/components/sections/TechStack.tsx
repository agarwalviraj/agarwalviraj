import Application from "../application";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";
// import images from "../../public/assets/tech-stack";
interface ImageArray {
  [key: string]: string | undefined;
}
const images: ImageArray = {
  CSS: "/assets/tech-stack/CSS.png",
  HTML: "/assets/tech-stack/HTML.png",
  JS: "/assets/tech-stack/Javascript.png",
  nodejs: "/assets/tech-stack/nodejs.png",
  express: "/assets/tech-stack/express.png",
  mongodb: "/assets/tech-stack/mongodb.png",
  react: "/assets/tech-stack/react.png",
  next: "/assets/tech-stack/next.png",
  vue: "/assets/tech-stack/vue.png",
  sass: "/assets/tech-stack/sass.png",
  tailwind: "/assets/tech-stack/tailwind.png",
  mysql: "/assets/tech-stack/mysql.png",
  php: "/assets/tech-stack/php.png",
};

const TechStack = () => {
  const { allApplications } = useMainStore()!;
  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.TECHSTACK,
  );
  return (
    <Application currentId={currentId}>
      <div className="main-section tech-stack">
        <div className="text">
          <span>My humble...</span>
          <h1>Tech Stack</h1>
        </div>
        <div className="technologies">
          {Object.keys(images).map((src, id) => {
            return <img key={id} src={images[src]} />;
          })}
        </div>
      </div>
    </Application>
  );
};

export default TechStack;
