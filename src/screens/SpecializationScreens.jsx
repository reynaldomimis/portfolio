import React from "react";
import { skillIcon, projectIcon } from "../utils/Icons";
import { CCard } from "../components";

const SpecializationScreens = ({ id }) => {
  return (
    <div
      className="container-fluid py-5 text-white"
      style={{ backgroundColor: "#131019C1" }}
    >
      {/* Heading and Icons */}
      <div
        className="w-100 px-4"
        style={{ maxWidth: "1600px", margin: "0 auto" }}
      >
        <p
          data-aos="fade-up-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="display-4 fw-bold text-danger mb-4 text-start"
        >
          Tech <b className="text-white">Stack</b>
        </p>

        <div className="d-flex flex-wrap gap-3 mb-5">
          {skillIcon.map((item, i) => (
            <img
              src={item}
              key={i}
              alt=""
              style={{ height: "50px", width: "55px" }}
            />
          ))}
        </div>

        <div
          data-aos="fade-up-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="display-5 fw-bold text-danger mb-4 text-start"
        >
          Technical <b className="text-white">Skills</b>
        </div>

        {/* Cards grid */}
        <div id={id} style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            {projectIcon.map((item, i) => (
              <div key={i} className="col d-flex justify-content-center">
                <CCard
                  title={item.title}
                  description={item.des}
                  src={item.icon}
                  aos={item.anim}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializationScreens;
