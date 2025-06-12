import React from "react";
import { CMenu } from "../components";
import "./styled.scss";

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
              <b>Hi, </b> I am
            </span>
            <p className="t2" data-aos="fade-down-right">
              Reynaldo C. Mimis
            </p>
          </div>
          <p className="des" data-aos="fade-down-left">
            Junior Web Developer and IT Support Specialist
          </p>
          <div className="btn-wrapper">
            <a href="https://github.com/reynaldomimis">
              <div
                className="btn"
                data-aos-anchor-placement="top-bottom"
                data-aos="fade-up"
              >
                <span style={{ marginRight: "10px" }}>Github </span>
                <img
                  src="https://res.cloudinary.com/dkbbweo5x/image/upload/v1669961482/portfolio-assets/GitHub_agfcie.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
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
