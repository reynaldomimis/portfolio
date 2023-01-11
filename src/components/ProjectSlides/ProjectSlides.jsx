import React from "react";
import "./styled.scss";
import { Parallax } from "react-scroll-parallax";

const ProjectSlides = ({ title, des }) => {
  return (
    <>
      <Parallax translateX={[-20, 20]} speed={5}>
        <div className="p-content">
          <div className="p-left">
            <span data-aos="fade-down-right" className="p-t1">
              {title}
            </span>

            <p className="p-des" data-aos="zoom-out-right">
              {des}
            </p>
            <div className="p-tag">
              <div className="btn">
                <span>View Code</span>
              </div>
              <div className="btn">
                <span>Demo</span>
              </div>
            </div>
          </div>
          <div className="p-right">
            <img
              src="https://res.cloudinary.com/dkbbweo5x/image/upload/v1669434028/portfolio-assets/pic_rzeyxu.png"
              alt=""
              className="pic"
            />
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default ProjectSlides;
