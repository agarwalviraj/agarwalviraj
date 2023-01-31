import React, { useEffect, useRef, useState } from "react";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";
import Application from "../application";
import { toggleApp, close, minimize } from "../../utils/actions";

const Terminal = () => {
  const { allApplications, setActive, setAllApplications, onMobile } =
    useMainStore()!;
  const DefaultPrompt = () => (
    <div className="prompt">admin@agarwalviraj.in -&gt;&nbsp;</div>
  );

  const [count, setCount] = useState(1);
  const [currentInputValue, setCurrentInputValue] = useState("");

  const outputRef = useRef<HTMLDivElement>(null);
  const commandRef = useRef<HTMLDivElement>(null);
  let allApps = Object.keys(slugs)
    .toString()
    .toLowerCase()
    .replaceAll(",", "<br/>");
  allApps = allApps + "<br/>exit<br/>help ";

  const commands = {
    about: 0,
    projects: 1,
    techstack: 2,
    contactme: 3,

    help: () => {
      outputRef.current!.innerHTML = `<p class="help-output"><strong>Try running any of these commands</strong></p> 
      ${allApps}`;
    },
    clear: () => {
      document.querySelector(".output")!.innerHTML = "";
      setCount(0);
    },
    exit: () => {
      close(allApplications, 4, setAllApplications);
    },
  };

  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.TERMINAL,
  );

  function eventHandler(e: KeyboardEvent) {
    if (e.key == "Enter") {
      setCount((old) => {
        return old + 1;
      });

      e.preventDefault();

      setCurrentInputValue((old) => {
        Object.keys(commands).map((command) => {
          if (old.toLowerCase() === command.toLowerCase()) {
            if (typeof (commands as any)[command] === "function")
              (commands as any)[command]();
            else if ((commands as any)[command] >= 0) {
              if (onMobile) minimize(currentId, setAllApplications, false);

              toggleApp(
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
