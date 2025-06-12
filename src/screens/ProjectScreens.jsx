import React from "react";
import { CProjectCard } from "../components/";
import { exampleProjects } from "../utils/Icons";

const ProjectScreens = ({ id }) => {
  return (
    <div
      id={id}
      className="container-fluid text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)), url('https://res.cloudinary.com/dkbbweo5x/image/upload/v1669434156/portfolio-assets/recents_s0ux67.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "3rem 1rem",
      }}
    >
      <div
        className="w-100 px-4"
        style={{ maxWidth: "1600px", margin: "0 auto" }}
      >
        <div
          className="text-center text-md-start mb-5"
          data-aos="fade-down-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="display-4 fw-bold text-danger">
            Recent <b className="text-white">Projects</b>
          </h1>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {exampleProjects.map((project, i) => (
            <div className="col" key={i}>
              <CProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectScreens;
