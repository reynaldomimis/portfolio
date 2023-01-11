import React from "react";
import "./styled.scss";
import { skillIcon, projectIcon } from "../../utils/CIcons";
import CCard from "../../components/CCard/CCard";

const SpecializationScreens = ({ id }) => {
  return (
    <div id={id} className="specialization">
      <div className="s-title">
        <p
          data-aos="fade-up-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          My <b>specialization</b>
        </p>
        <div
          className="skill-icon"
          data-aos="zoom-out-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {skillIcon.map((item, i) => {
            return <img src={item} key={i} alt="" className="s-icon" />;
          })}
        </div>
      </div>
      <div className="recent-card">
        {projectIcon.map((item, i) => {
          return (
            <CCard
              key={i}
              title={item.title}
              description={item.des}
              src={item.icon}
              aos={item.anim}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpecializationScreens;
