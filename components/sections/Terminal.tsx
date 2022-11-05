import React, { useEffect, useRef, useState } from "react";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";
import Application from "../application";
import { close } from "../../utils/actions";

const Terminal = () => {
  const { allApplications, setActive, setAllApplications } = useMainStore()!;
  const DefaultPrompt = () => <div>{"admin@agarwalviraj.in -> ~  "}</div>;

  const [count, setCount] = useState(1);
  const [currentInputValue, setCurrentInputValue] = useState("");

  const outputRef = useRef<HTMLDivElement>(null);
  const commandRef = useRef<HTMLDivElement>(null);
  const allApps = allApplications
    .map((app) => app.name.split(" ").join("-").toLocaleLowerCase())
    .toString()
    .replaceAll(",", "<br/>");
  console.log(allApps);

  const commands = {
    "help": () => {
      outputRef.current!.innerHTML = `<p><strong>Try running any of these commands</strong></p> 
      ${allApps}`;
    },
    "clear": () => {
      document.querySelector(".output")!.innerHTML = "";
      setCount(0);
    },
    "about": 0,
    "project": 1,
    "tech-stack": 2,
    "contact-me": 3,
    "exit": () => {
      close(allApplications, 4, setActive, setAllApplications, true);
    },
  };

  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.TERMINAL,
  );

  function eventHandler(e: KeyboardEvent) {
    if (e.key == "Enter") {
      e.preventDefault();
      setCurrentInputValue((old) => {
        Object.keys(commands).map((command) => {
          if (old.includes(command)) {
            if (typeof (commands as any)[command] === "function")
              (commands as any)[command]();
            else if ((commands as any)[command] >= 0) {
              close(
                allApplications,
                (commands as any)[command],
                setActive,
                setAllApplications,
                false,
              );
            }
          }
        });

        return "";
      });
      setCount((old) => old + 1);
    }
  }

  useEffect(() => {
    addEventListener("keypress", eventHandler);
    return () => removeEventListener("keypress", eventHandler);
  }, []);

  useEffect(() => {
    if (count == 0) setCount(1);
    if (commandRef.current) commandRef.current.querySelector("input")?.focus();
  }, [count]);

  return (
    <Application currentId={currentId}>
      <div className="terminal">
        {[...Array(count)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="command-line" ref={commandRef}>
              <DefaultPrompt />
              <input
                type="text"
                className="text"
                key={i}
                value={i == count - 1 ? currentInputValue : undefined}
                onChange={(e) => setCurrentInputValue(e.target.value)}
                disabled={i != count - 1 ? true : false}
              />
            </div>
            <div className="output" ref={outputRef}></div>
          </React.Fragment>
        ))}
      </div>
    </Application>
  );
};

export default Terminal;
