import React, { useEffect, useRef } from "react";

const Application = () => {
  const AppRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (AppRef) {
      AppRef.current!.addEventListener("mousedown", function (e: MouseEvent) {
        const targetElement = e.target as Element;

        var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
        var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);

        function mouseMoveHandler(e: MouseEvent) {
          if (targetElement.classList.contains("application")) {
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
      });
    }
  }, []);

  return (
    <>
      <div className="application" ref={AppRef}>
        Modal
        <div className="application_main_section">Test section</div>
      </div>
    </>
  );
};

export default Application;
