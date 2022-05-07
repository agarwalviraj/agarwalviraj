import { useEffect, useRef } from "react";
import { useMainStore } from "../store/MainStore";

interface AppProps {
  children: React.ReactChild;
  currentId: number;
}

const Application = ({ children, currentId }: AppProps) => {
  const AppRef = useRef<HTMLDivElement>(null);
  const { allApplications, setActive, active } = useMainStore()!;

  const handleMouseDown = function (e: MouseEvent) {
    const targetElement = e.target as Element;
    if (AppRef.current) {
      var offsetX =
        e.clientX - parseInt(window.getComputedStyle(AppRef.current!).left);
      var offsetY =
        e.clientY - parseInt(window.getComputedStyle(AppRef.current!).top);
    }

    function mouseMoveHandler(e: MouseEvent) {
      if (targetElement.classList.contains("titlebar") && AppRef.current) {
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

  console.log(
    active,
    currentId,
    allApplications[currentId].slug,
    allApplications[currentId].slug == active,
  );

  return (
    <>
      <div
        className="application"
        ref={AppRef}
        style={{
          zIndex: allApplications[currentId].slug == active ? 10 : 0,
        }}
      >
        <div
          className="titlebar"
          onClick={() => setActive(allApplications[currentId].slug)}
          onMouseDown={() => setActive(allApplications[currentId].slug)}
        >
          TitleBar 2
        </div>
        <div className="application_main_section">{children}</div>
      </div>
    </>
  );
};

export default Application;
