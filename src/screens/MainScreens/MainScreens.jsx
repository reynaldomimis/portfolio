import React from "react";
import "./styled.scss";
import CMenu from "../../components/CMenu/CMenu";

const MainScreens = ({ id }) => {
  return (
    <section id={id} className="main">
      <div className="header">
        <div className="logo">
          <h3>RM</h3>
          <h4>DEV</h4>
        </div>
      </div>
      <div className="content">
        <div className="left">
          <div className="title-section">
            <span className="t1" data-aos="fade-up-right">
              <b>Hello </b> there,
            </span>
            <p className="t2" data-aos="fade-down-right">
              I'm Reynaldo Mimis
            </p>
          </div>
          <p className="des" data-aos="fade-down-left">
            an aspiring Front-End Developer
          </p>
          <div className="btn-wrapper">
            <a href="#contact">
              <div
                className="btn"
                data-aos-anchor-placement="top-bottom"
                data-aos="fade-up"
              >
                <span>Hire me</span>
              </div>
            </a>
          </div>
        </div>
        <div className="right">
          <CMenu />
        </div>
      </div>
    </section>
  );
};

export default MainScreens;
