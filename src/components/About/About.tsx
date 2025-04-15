import React from 'react';
import "./About.css"

const About = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      bg-[#0d0d0d] border border-green-500 max-w-2xl h-[30rem] w-[90%] md:w-[40rem] rounded-xl shadow-lg overflow-hidden z-50">
      
      <div className="bg-[#1e1e1e] h-10 flex items-center px-4 border-b border-green-500 justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 cursor-pointer rounded-full bg-red-500"></span>
          <span className="w-3 h-3 cursor-pointer rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 cursor-pointer rounded-full bg-green-500"></span>
        </div>
        <span className="text-base text-green-400 font-semibold tracking-widest">About Me</span>
        <button className="text-green-400 cursor-pointer hover:text-red-400 font-bold text-xl leading-none">×</button>
      </div>

      {/* Content */}
      <div className="text-green-400 font-mono px-6 py-4 overflow-y-auto h-[calc(100%-2.5rem)]">
        <div className="text-base tracking-wide space-y-4">
          <p className='mt-4'>👋 Hi, Gulshan here, ready to transform the digital world one line of code at a time. Whether it's building lightning-fast web applications or exploring new tech, I&apos;m always in the zone! 🚀</p>

          <p className='mt-4'><strong>💻 MERN & Next.js Developer::</strong> </p>
          <ul className='list-disc list-inside space-y-1 text-base'>
          <li>Proficient in building full-stack applications using the MERN stack.</li> <li>Currently diving into <strong>Next.js</strong> through real-world projects to enhance SSR and routing skills.</li> <li>Hands-on with REST APIs, Socket.IO, and MongoDB optimization.</li> 
          </ul>

          <p className='mt-4'> <strong>⚡ What Drives Me</strong></p> <ul className="list-disc list-inside space-y-1"> <li>🚀 Love solving real-world problems with code that works beautifully and performs fast.</li> <li>🧠 Constantly exploring new tech — be it WebRTC, AI bots, or predictive analytics.</li> <li>📚 Believe in learning by building. Every project teaches me something new.</li> </ul>

          <p className='mt-4'>💡 <strong>🤝 Why Work With Me?</strong></p> <ul className="list-disc list-inside space-y-1"> <li>🧹 Clean Code Advocate — I write maintainable, readable, and reusable code.</li> <li>💬 Team Player — I enjoy brainstorming and building stuff with people smarter than me.</li> <li>🎯 Focused — My only mission right now is to work hard, get great at dev, and support my family.</li> </ul>

          <p className='mt-4'>💡 <strong>🧠 Always Learning:</strong></p> <ul className="list-disc list-inside space-y-1"> <li>Currently building an AI-powered Telegram bot, a matrix-themed game, and a predictive forest fire system.</li> <li>Exploring advanced patterns in React, Next.js, and serverless functions.</li> </ul>
          <p className='mt-4 text-lg text-center'><strong>🤟 Let&apos;s connect and build something together</strong></p>
        </div>
      </div>
    </div>
  );
};

export default About;
