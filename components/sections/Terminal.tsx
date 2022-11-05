import React, { useEffect, useRef, useState } from "react";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";
import Application from "../application";

const Terminal = () => {
  const { allApplications } = useMainStore()!;
  const DefaultPrompt = () => <div>{"admin@agarwalviraj.in -> ~ "}</div>;

  const [count, setCount] = useState(1);
  const [currentInputValue, setCurrentInputValue] = useState("");

  const outputRef = useRef<HTMLDivElement>(null);
  const commandRef = useRef<HTMLDivElement>(null);

  const currentId = allApplications.findIndex(
    (obj) => obj.slug == slugs.TERMINAL,
  );

  function resetTerminal() {
    document.querySelector(".output")!.innerHTML = "";
    setCount(0);
  }

  function eventHandler(e: KeyboardEvent) {
    if (e.key == "Enter") {
      e.preventDefault();
      setCurrentInputValue((old) => {
        if (old == "clear") resetTerminal();

        if (old == "help" && outputRef.current)
          outputRef.current.innerHTML = "<h1>Hello</h1>";

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
          <>
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
          </>
        ))}
      </div>
    </Application>
  );
};

export default Terminal;
