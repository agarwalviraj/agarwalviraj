import React, { useEffect, useRef } from "react";

interface AppProps {
  children: any;
}

const Application = ({ children }: AppProps) => {
  const AppRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <div className="application" ref={AppRef}>
        <div className="titlebar">TitleBar 2</div>
        {children}
      </div>
    </>
  );
};

export default Application;
