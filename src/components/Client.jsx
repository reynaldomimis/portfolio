import React from "react";
import { clientIcon } from "../utils/Icons";

const Client = () => {
  return (
    <div
      className="client container my-5 text-center"
      style={{ marginTop: "-2.5rem" }}
    >
      <div className="c-title" data-aos="fade-down">
        <p className="display-4 fw-bold text-white mb-4">
          <b className="text-danger">Trusted</b> from Clients
        </p>
      </div>
      <div className="cc-wrapper row justify-content-center g-4">
        {clientIcon.map((item, i) => (
          <div
            key={i}
            className="col-6 col-sm-4 col-md-2 d-flex justify-content-center"
          >
            <img
              src={item.icon}
              alt=""
              data-aos-easing="ease-in-sine"
              data-aos-duration={item.delay}
              data-aos={item.anim}
              className="c-icon rounded-circle"
              style={{ width: "125px", height: "125px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
