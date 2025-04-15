"use client";
import React, { useEffect, useRef, useState } from "react";
import { commandHandlers } from "./command";
import "./terminal.css"
import About from "../About/About";


const Terminal = () => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState<{ command: string; output: string }[]>(
    []
  );

  const [winAbout, setWinAbout] = useState(false)

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
        setWinAbout(true)
        setOutput("Unlocking alien data..."); // Custom output for the about command
        setHistory((pre) => [
          ...pre,
          { command: cmd, output: "Unlocking alien data..." },
        ]);
        break;
      default:
        setOutput("Command not found.");
        setHistory((pre) => [
          ...pre,
          { command: cmd, output: "Command not found." },
        ]);
        break;
    }
    setCommand("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {   

    if (e.key === "Enter") {
        const audio = new Audio("/mp3/enter.mp3")
        audio.volume = 1.0;
        audio.play().catch((e)=>{})
        handleCommand(command);
    }
    else{
        const audio = new Audio("/typing_normal.mp3");
        audio.volume = 0.9; 
        audio.play().catch(() => {}); 
    }
    
  };

  return (
    <div className="w-full mt-10 px-6 text-emerald-300 font-mono text-sm md:text-base z-10">
      <div className="" >
        {history.map((value, index) => (
          <div key={index}>
            <div className="flex items-center  w-full ">
              <span className="anime md:w-screen mt-6 text-xs md:text-base ">
                {`gushos@omnitrix-terminal:~$ ${value.command}` }
              </span>
            </div>
            {output && <pre className="animate">{value.output}</pre>}
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center  w-full">
          <span className="md:w-[24%] text-xs md:text-base ">
            {`gushos@omnitrix-terminal:~$ `}
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
      {winAbout ? <About/> : ""}
    </div>


  );
};

export default Terminal;
