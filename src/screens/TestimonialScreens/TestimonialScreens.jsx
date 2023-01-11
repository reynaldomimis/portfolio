import React from "react";
import "./styled.scss";
import { tesIcon } from "../../utils/CIcons";
import CQuotes from "../../components/CQuotes/CQuotes";
import CService from "../../components/CService/CService";

const TestimonialScreens = ({ id }) => {
  return (
    <section id={id} className="testimonial">
      <div
        className="s-title"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div className="what">
          <span>What people are </span>
          <p>
            saying<b> about me</b>
          </p>
        </div>
        <div className="t-des">
          <p>My clients, team send us bunch of smile with my services.</p>
        </div>
      </div>
      <div className="t-cards">
        {tesIcon.map((item, i) => {
          return (
            <CQuotes
              dev={item.name}
              title={item.pos}
              dp={item.icon}
              content={item.content}
              key={i}
              aos={item.anim}
            />
          );
        })}
      </div>
      <CService />
    </section>
  );
};

export default TestimonialScreens;
