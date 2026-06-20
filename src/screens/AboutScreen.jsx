import React from "react";
import { logoIcon } from "../utils/dataItems";
import BackgroundOverlay from "../components/BackgroundOverlay";

const AboutScreen = () => {
  const highlights = [
    { number: "2+", label: "Years Experience" },
    { number: "20+", label: "Projects Done" },
    { number: "5+", label: "Technologies" },
  ];

  return (
    <section className="relative mx-auto px-2 sm:px-2 md:px-4 lg:px-12 py-12 text-white bg-gray-900 overflow-hidden">
     
      {/* OVERLAY */}
      <BackgroundOverlay/>
      {/* CONTENT */}
      <div className="relative z-10">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-300 mt-2">
            Passionate Web & Android Developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* PROFILE CARD */}
          <div className="lg:col-span-5">
            <div
              className="text-center p-6 rounded-2xl 
              bg-[rgba(2,6,23,0.55)] 
              backdrop-blur-xl 
              border border-white/10
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              hover:scale-[1.02] transition"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-red-500 flex items-center justify-center">
                {logoIcon}
              </div>

              <h4 className="text-lg font-semibold">Reynaldo C. Mimis</h4>

              <p className="text-red-400 mb-4">Web & Android Developer</p>

              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">
                  Problem Solver
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">
                  Team Player
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">
                  Fast Learner
                </span>
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="lg:col-span-7">
            <h5 className="text-red-400 font-semibold mb-2">
              Building Digital Solutions That Matter
            </h5>

            <p className="text-gray-300 mb-6">
              I build responsive and performance-driven web and Android
              applications that solve real-world problems.
            </p>

            <h5 className="text-red-400 font-semibold mb-3">Core Strengths</h5>

            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-2">✅ Frontend: React, modern UI</li>
              <li className="flex gap-2">✅ Backend: Node.js, REST APIs</li>
              <li className="flex gap-2">✅ Mobile: Android (Java / Kotlin)</li>
              <li className="flex gap-2">✅ Mindset: Clean code & teamwork</li>
            </ul>
          </div>
        </div>

        {/* 🔥 HIGHLIGHTS (IMPROVED DROP STYLE) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 text-center">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="
                p-8 rounded-2xl
                bg-[rgba(2,6,23,0.45)]
                backdrop-blur-xl
                border border-white/10
                shadow-[0_25px_70px_rgba(0,0,0,0.65)]
                hover:translate-y-[-6px] hover:scale-[1.02]
                transition duration-300
              "
            >
              <h2
                className="
                text-4xl font-bold text-blue-400
                drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]
              "
              >
                {item.number}
              </h2>

              <p className="text-gray-300 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutScreen;
