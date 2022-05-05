import React, { useEffect, useRef } from "react";

const Application = () => {
  const AppRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = function (e: MouseEvent) {
    const targetElement = e.target as Element;

    var offsetX =
      e.clientX - parseInt(window.getComputedStyle(AppRef.current!).left);
    var offsetY =
      e.clientY - parseInt(window.getComputedStyle(AppRef.current!).top);

    function mouseMoveHandler(e: MouseEvent) {
      if (targetElement.classList.contains("titlebar")) {
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
    if (AppRef) {
      AppRef.current!.addEventListener("mousedown", handleMouseDown);
    }
    return () =>
      AppRef.current!.removeEventListener("mousedown", handleMouseDown);
  }, []);

  return (
    <>
      <div className="application" ref={AppRef}>
        <div className="titlebar">TitleBar</div>
        <div className="application_main_section">Test section</div>
      </div>
    </>
  );
};

export default Application;
