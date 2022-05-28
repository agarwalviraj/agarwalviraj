import { useEffect, useRef } from "react";
import { useMainStore } from "../../store/MainStore";
import Titlebar from "./Titlebar";

interface AppProps {
  children: React.ReactChild;
  currentId: number;
}

const Application = ({ children, currentId }: AppProps) => {
  const AppRef = useRef<HTMLDivElement>(null);
  const { allApplications, active } = useMainStore()!;

  const maximizedStyle = {};

  const handleMouseDown = function (e: MouseEvent) {
    const targetElement = e.target as Element;
    if (AppRef.current) {
      var offsetX =
        e.clientX - parseInt(window.getComputedStyle(AppRef.current!).left);
      var offsetY =
        e.clientY - parseInt(window.getComputedStyle(AppRef.current!).top);
    }

    function mouseMoveHandler(e: MouseEvent) {
      if (
        !allApplications[currentId].isMaximized &&
        targetElement.classList.contains("titlebar") &&
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
  }, []);

  return (
    <>
      <div
        className="application"
        ref={AppRef}
        style={{
          zIndex: allApplications[currentId].slug == active ? 10 : 5,
          inset: allApplications[currentId].isMaximized
            ? "0 0 2.7rem 0"
            : "40%",
          height: allApplications[currentId].isMaximized ? "auto" : "40vh",
          width: allApplications[currentId].isMaximized ? "auto" : "40vw",
        }}
      >
        <Titlebar currentId={currentId} />
        <div className="application_main_section">{children}</div>
      </div>
    </>
  );
};

export default Application;
