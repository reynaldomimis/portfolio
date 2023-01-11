import React from "react";
import { clientIcon } from "../../utils/CIcons";
import "./styled.scss";

const CClient = () => {
  return (
    <>
      <div className="client">
        <div className="c-title" data-aos="fade-down">
          <p>
            <b>Trusted</b> from Clients
          </p>
        </div>
        <div className="cc-wrapper">
          {clientIcon.map((item, i) => {
            return (
              <img
                key={i}
                src={item.icon}
                alt=""
                data-aos-easing="ease-in-sine"
                className="c-icon"
                data-aos-duration={item.delay}
                data-aos={item.anim}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CClient;
