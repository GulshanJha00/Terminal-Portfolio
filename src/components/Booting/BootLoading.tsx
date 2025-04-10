"use client"
import React, { useEffect, useState } from "react";
import "./booting.css";
const BootLoading = () => {
  const [value, setValue] = useState(0);

  const BOOT_ARRAY = [
    "[INFO] [2.25s] > Initializing Gush bootloader...",
    "[OK]   [4.84s] > Core modules loaded.",
    "[WARN] [6.65s] > User auth token delayed...",
    "[OK]   [10.43s] > Kernel compiled.",
    "[OK]   [11.03s] > File system mounted.",
    "[OK]   [12.24s] > Booting....."

  ]

  useEffect(() => {
    const playSound = (path: string) => {
    try {
      const audio = new Audio(path);
      audio.play().catch(err => {
        // Optional: console.warn("Autoplay failed:", err);
      });
    } catch (error) {
      // Optional: console.warn("Audio play error:", error);
    }
  }
  
    if(value) if (value >= 100)return;


    let speed =150; 

    if (value >= 15 && value < 55) {
      speed = 120;
    } else if(value>=55 && value<56){
      speed = 2000;
    }
    else if (value >= 56 && value < 80) {
      speed = 100;
    } else if (value >= 80) {
      playSound("/mp3/booting.ogg");
      speed = 50;
    }

    const interval = setTimeout(() => {
      setValue(prev => prev + 1);
    }, speed);
    return () => clearTimeout(interval);
  }, [value]);
  const visibleLogs = BOOT_ARRAY.slice(0, Math.floor(value / 15));

  return (
    <div className="w-full text-[#00FF41] border-2 border-[#00FF41] h-screen flex flex-col justify-center items-center">
      <div className="w-full h-screen absolute z-50 opacity-55 bg-[#0a0a0a] bg-[length:3px_3px] text-[#00FF41] bg-[linear-gradient(to_right,#00FF4111_1px,transparent_1px),linear-gradient(to_bottom,#00FF4111_1px,transparent_1px)]"></div>
      {/* Text part */}

      <div
        className="animate-pulse text-[#00FF41] mb-4"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          animationDuration: "0.1s",
          fontWeight: 900,
          fontSize: "50px",
          fontStyle: "italic",
        }}
      >
        GushOS v1.8
      </div>

      <div
        className=" mb-4 text-lg"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          animationDuration: "0.3s",
          fontStyle: "italic",
        }}
      >
        {" "}
        GushOS Boot Sequence<span className="boot">_</span>
      </div>

      {/* Video Animated Text Part */}

      <div className="border-2 mb-4 p-4 text-lg border-[#00FF41] w-[40rem] h-[25rem] rounded-lg px-4 py-3  font-mono overflow-hidden z-10">
        {visibleLogs.map((log, idx) => (
          <div key={idx} className="animate-fadeIn mb-4">{log}</div>
        ))}
      </div>


      {/**Loading */}

      <div className=" text-lg w-[40rem] mb-4">
        <div className="w-full h-[10px] rounded-lg bg-green-800">
          <div style={{ width: `${value}%` }} className={` h-[10px] rounded-lg bg-[#00FF41]`}></div>
        </div>
        <div className="text-right font-bold text-[#FFFF00]">{`${value}%`}</div>
      </div>
      <div style={{animationDuration: "0.1s"}} className="animate-pulse  text-xs font-light mb-4">
        {"~ Press any key to interrupt boot sequence"}
      </div>
      <div style={{animationDuration: "0.1s"}} className="animate-pulse text-xs font-light">
        &copy; 2025 GushOs Inc. All Rights Reserved
      </div>
    </div>
  );
};

export default BootLoading;
