import React from "react";
import { CProjectCard } from "../components";
import { exampleProjects } from "../utils/dataItems";
import BackgroundOverlay from "../components/BackgroundOverlay";

const ProjectScreen = () => {
  return (
    <section className="relative mx-auto px-2 sm:px-2 md:px-4 lg:px-12 py-12 bg-gray-900 overflow-hidden">
      {/* OVERLAY */}
      <BackgroundOverlay />

      {/* Content wrapper */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Explore my latest work and technical implementations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exampleProjects.map((project, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <CProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectScreen;