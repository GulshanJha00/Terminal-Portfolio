"use client";
import React, { useEffect, useRef, useState } from "react";
import { commandHandlers } from "./command";
import "./terminal.css"
const Terminal = () => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState<{ command: string; output: string }[]>(
    []
  );
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);


  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    switch (trimmed) {
      case "help":
        setOutput(commandHandlers.help());
        setHistory((pre) => [
          ...pre,
          { command: cmd, output: commandHandlers.help() },
        ]);
        break;
      case "about":
        break;
    }
    setCommand("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(command);
    }
  };

  return (
    <div className="w-full mt-10 px-6 text-emerald-300 font-mono text-sm md:text-base z-10">
      <div className="mb-4" >
        {history.map((value, index) => (
          <div key={index}>
            <div className="flex items-center mb-4 w-full ">
              <span className="md:w-[22%] text-xs md:text-base ">
                {`gush-os@matrix-terminal:~$ `}
              </span>
            </div>
            {output && <pre className="animate">{output}</pre>}
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center mb-4 w-full">
          <span className="md:w-[22%] text-xs md:text-base ">
            {`gush-os@matrix-terminal:~$ `}
          </span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="outline-none w-full"
            autoFocus
          />
        </div>
      </div>
      <div ref={bottomRef} />

    </div>
  );
};

export default Terminal;
