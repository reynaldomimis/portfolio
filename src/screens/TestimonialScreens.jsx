import React from "react";
import { tesIcon } from "../utils/Icons";
import { CServices, CQuotes } from "../components";

const TestimonialScreens = ({ id }) => {
  return (
    <section id={id} className="testimonial container-fluid">
      <div className="container py-3">
        <div
          className="s-title row align-items-center justify-content-between pb-3"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="col-md-6 what  mb-md-0">
            <span className="display-5 fw-semibold text-white">
              What people are
            </span>
            <p className="display-5 fw-bold text-white">
              saying <b className="text-danger">about me</b>
            </p>
          </div>
          <div className="col-md-6 t-des text-center text-md-end">
            <p className="text-white fs-5 px-md-4">
              "My clients, team send us bunch of smile with my services".
            </p>
          </div>
        </div>

        <div className="t-cards row g-4 ">
          {tesIcon.map((item, i) => (
            <div className="col-sm-6 col-lg-4 d-flex" key={i}>
              <CQuotes
                dev={item.name}
                title={item.pos}
                dp={item.icon}
                content={item.content}
                aos={item.anim}
              />
            </div>
          ))}
        </div>

        <CServices />
      </div>
    </section>
  );
};

export default TestimonialScreens;
