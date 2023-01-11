import React from "react";
import "./styled.scss";

const CService = () => {
  return (
    <>
      <div className="service" data-aos="zoom-out-down">
        <div className="try">
          <span>Let’s try my service now!</span>
          <p>
              I can provide clean code and also make the website more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their device.
          </p>
        </div>

        <div className="btn" data-aos="zoom-in-right">
        <a style={{ padding: "2rem 1rem",textDecoration: "none", color: "white"}} href="https://reymimz.github.io/resume/reynaldomimis.pdf" download>
          <span>Download CV</span>
    </a>
        </div>

      </div>
  
    </>
  );
};

export default CService;
