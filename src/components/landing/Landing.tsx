"use client"
import React from "react";
import Terminal from "../Terminal/Terminal";

const Landing = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed bg-fixed bg-no-repeat object-center top-0 left-0 w-full h-full object-cover z-[-2]"
        src="/hacking.mp4"
      />
        <div className="fixed inset-0 opacity-70 z-[-1] bg-black"></div>
      <div className="w-full h-max mb-16 md:mb-40  items-center flex flex-col">
        <pre className="text-center text-emerald-300 text-[4px] mb-4 sm:text-[6px] md:text-[10px] lg:text-base xl:text-xl leading-none font-mono z-10 relative">
          {`
                                                                                                                   
        GGGGGGGGGGGGG                                   hhhhhhh                  OOOOOOOOO        SSSSSSSSSSSSSSS 
     GGG::::::::::::G                                   h:::::h                OO:::::::::OO    SS:::::::::::::::S
   GG:::::::::::::::G                                   h:::::h              OO:::::::::::::OO S:::::SSSSSS::::::S
  G:::::GGGGGGGG::::G                                   h:::::h             O:::::::OOO:::::::OS:::::S     SSSSSSS
 G:::::G       GGGGGGuuuuuu    uuuuuu      ssssssssss    h::::h hhhhh       O::::::O   O::::::OS:::::S            
G:::::G              u::::u    u::::u    ss::::::::::s   h::::hh:::::hhh    O:::::O     O:::::OS:::::S            
G:::::G              u::::u    u::::u  ss:::::::::::::s  h::::::::::::::hh  O:::::O     O:::::O S::::SSSS         
G:::::G    GGGGGGGGGGu::::u    u::::u  s::::::ssss:::::s h:::::::hhh::::::h O:::::O     O:::::O  SS::::::SSSSS    
G:::::G    G::::::::Gu::::u    u::::u   s:::::s  ssssss  h::::::h   h::::::hO:::::O     O:::::O    SSS::::::::SS  
G:::::G    GGGGG::::Gu::::u    u::::u     s::::::s       h:::::h     h:::::hO:::::O     O:::::O       SSSSSS::::S 
G:::::G        G::::Gu::::u    u::::u        s::::::s    h:::::h     h:::::hO:::::O     O:::::O            S:::::S
 G:::::G       G::::Gu:::::uuuu:::::u  ssssss   s:::::s  h:::::h     h:::::hO::::::O   O::::::O            S:::::S
  G:::::GGGGGGGG::::Gu:::::::::::::::uus:::::ssss::::::s h:::::h     h:::::hO:::::::OOO:::::::OSSSSSSS     S:::::S
   GG:::::::::::::::G u:::::::::::::::us::::::::::::::s  h:::::h     h:::::h OO:::::::::::::OO S::::::SSSSSS:::::S
     GGG::::::GGG:::G  uu::::::::uu:::u s:::::::::::ss   h:::::h     h:::::h   OO:::::::::OO   S:::::::::::::::SS 
        GGGGGG   GGGG    uuuuuuuu  uuuu  sssssssssss     hhhhhhh     hhhhhhh     OOOOOOOOO      SSSSSSSSSSSSSSS   
                                                                                                                
`}
        </pre>
        <div className="border-2 border-emerald-300 md:py-4 mx-4 p-2 md:px-16 text-xs md:text-base text-emerald-300">
          <h1 className="">{`>>> GushOS Terminal online.  `}</h1>
          <h1 className="text-emerald-300">{`>>> Type "help" to reveal available commands.  
          Engage simulation to experience the Matrix protocol.`}</h1>
        </div>
      </div>

      <Terminal/>
    </div>
  );
};

export default Landing;
