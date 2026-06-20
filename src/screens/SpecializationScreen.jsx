import React from "react";
import { projectIcon } from "../utils/dataItems";
import { CCard } from "../components";
import { skillGroups } from "../utils/dataItems";
import BackgroundOverlay from "../components/BackgroundOverlay";

const SpecializationScreen = () => {
  return (
    <section className="relative mx-auto px-2 sm:px-2 md:px-4 lg:px-12 py-12 bg-gray-900 overflow-hidden">
     {/* OVERLAY */}
      <BackgroundOverlay/>
      {/* CONTENT WRAPPER */}
      <div className="relative z-10 container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Tech <span className="text-blue-500">Stack</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Technologies and tools I use to build modern applications
          </p>
        </div>

        {/* SKILL GROUPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="
                p-4 rounded-xl
                bg-[rgba(17,24,39,0.65)]
                backdrop-blur-xl
                border border-white/10
                shadow-md
              "
            >
              {/* HEADER */}
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-md font-bold mr-2">
                  {group.letter}
                </div>
                <h5 className="text-white font-bold">{group.title}</h5>
              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <small className="text-gray-400 text-[11px] mt-1 block">
                      {skill.name}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Technical <span className="text-blue-500">Skills</span>
            </h3>
            <p className="text-gray-400 mt-2">
              Core competencies and expertise areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectIcon.map((item, i) => (
              <CCard
                key={i}
                title={item.title || "No Title"}
                description={item.des || "No description"}
                src={item.icon}
                aos={item.anim}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializationScreen;
