import { useEffect, useRef, useState } from "react";
import { useMainStore } from "../../store/MainStore";
import Titlebar from "./Titlebar";

interface AppProps {
  children: React.ReactChild;
  currentId: number;
}

const Application = ({ children, currentId }: AppProps) => {
  const AppRef = useRef<HTMLDivElement>(null);
  const { allApplications, active } = useMainStore()!;
  const [onMobile, setOnMobile] = useState(false);

  const maximizedStyle = {};

  const handleMouseDown = function (e: MouseEvent) {
    const targetElement = e.target as Element;
    let offsetX = 0,
      offsetY = 0;
    if (AppRef.current) {
      offsetX =
        e.clientX - parseInt(window.getComputedStyle(AppRef.current!).left);
      offsetY =
        e.clientY - parseInt(window.getComputedStyle(AppRef.current!).top);
    }

    function mouseMoveHandler(e: MouseEvent) {
      if (
        !allApplications[currentId].isMaximized &&
        targetElement.classList.contains("titlebar") &&
        e.clientX - offsetX > 0 &&
        e.clientX - offsetX + AppRef.current!.clientWidth + 4 <
          window.innerWidth &&
        e.clientY - offsetY > 0 &&
        e.clientY - offsetY + AppRef.current!.clientHeight + 4 <
          window.innerHeight &&
        AppRef.current
      ) {
        AppRef.current!.style.top = e.clientY - offsetY + "px";
        AppRef.current!.style.left = e.clientX - offsetX + "px";
      }
    }

    function reset() {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("mouseup", reset);
    }

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseup", reset);
  };

  useEffect(() => {
    if (AppRef.current) {
      AppRef.current.addEventListener("mousedown", handleMouseDown);
    }
    return () => {
      if (AppRef.current) {
        AppRef.current!.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, [AppRef]);

  useEffect(() => {
    const updateMobile = () => {
      setOnMobile(window.innerWidth < 768);
    };
    updateMobile();

    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  return (
    <>
      <div
        className="application"
        ref={AppRef}
        style={
          !onMobile
            ? {
                zIndex: allApplications[currentId].slug == active ? 10 : 5,
                inset: allApplications[currentId].isMaximized
                  ? "0 0 2.7rem 0"
                  : "40%",
                height: allApplications[currentId].isMaximized
                  ? "auto"
                  : "40vh",
                width: allApplications[currentId].isMaximized ? "auto" : "40vw",
              }
            : {
                inset: "0 0 2.7rem 0",
              }
        }
      >
        {!onMobile && <Titlebar currentId={currentId} />}
        <div className="application_main_section">{children}</div>
      </div>
    </>
  );
};

export default Application;
