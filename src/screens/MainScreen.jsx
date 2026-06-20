import React from "react";
import BackgroundOverlay from "../components/BackgroundOverlay";

const MainScreen = () => {
  return (
    <section className="relative mx-auto px-2 sm:px-2 md:px-4 lg:px-12 py-12 flex items-center justify-center text-center min-h-[calc(100vh-80px)] overflow-hidden bg-gray-900">
      {/* OVERLAY */}
      <BackgroundOverlay />
      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl text-white">
        <p className="text-gray-400 tracking-[0.3em] uppercase text-sm mb-4">
          Hello, I'm
        </p>

        <h1
          className="text-5xl md:text-6xl font-bold mb-3 relative
         bg-[radial-gradient(circle_at_top,_#60a5fa_0%,_#22d3ee_40%,_#1e3a8a_100%)]
        bg-clip-text text-transparent
        "
        >
          Reynaldo C. Mimis
          {/* glow underline accent */}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-40 h-[3px] bg-gradient-to-r from-blue-500 to-red-500 blur-sm opacity-80" />
        </h1>

        <h2 className="text-red-400 font-semibold text-xl md:text-2xl mb-5">
          Web & Android Developer
        </h2>

        <p className="text-gray-300 opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Building innovative digital solutions with modern technologies.
          Specialized in responsive web applications and Android development,
          with published apps on Google Play.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={() =>
              window.open(
                "https://rem-hub.vercel.app",
                "_blank",
              )
            }
            className="
            flex items-center gap-3
            px-6 py-3 rounded-xl
            bg-gradient-to-r from-blue-600 to-blue-500
            border border-gray-700
            shadow-md shadow-black/30
            hover:shadow-lg hover:shadow-black/40
            hover:scale-105 active:scale-95
            transition-all duration-300 focus:outline-none focus:ring-0"
          >
            <span className="text-green-400 text-xl">▦</span>

            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] text-gray-200">View on</span>
              <span className="text-sm font-semibold text-white tracking-wide">
                REM Hub
              </span>
            </div>
          </button>

          <button
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/developer?id=UPREYVAN",
                "_blank",
              )
            }
            className="
            flex items-center gap-3
            px-6 py-3 rounded-xl
          bg-gray-800
            border border-gray-700
            shadow-md shadow-black/30
            hover:shadow-lg hover:shadow-black/40
            hover:scale-105 active:scale-95
            transition-all duration-300 focus:outline-none focus:ring-0"
          >
            <span className="text-green-400 text-xl">▶</span>

            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] text-gray-400">View on</span>
              <span className="text-sm font-semibold text-white tracking-wide">
                Google Play
              </span>
            </div>
          </button>

          <button
            className="
    flex items-center gap-2
    px-5 py-3 rounded-xl
    bg-gradient-to-r from-rose-100 to-red-100
    border border-red-200
    shadow-sm shadow-red-200/20
    text-gray-900 font-medium

    hover:shadow-md hover:shadow-red-300/30
    hover:scale-105 active:scale-95
    transition-all duration-300
    focus:outline-none focus:ring-0
  "
          >
            <span className="text-red-500 text-lg">⬇</span>

            <span>Download CV</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;
