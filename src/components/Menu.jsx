import React from "react";
import "./styled.scss";

import Tilt from "react-parallax-tilt";
import { useParallax } from "react-scroll-parallax";
import { logoIcon } from "../utils/Icons";

const Menu = () => {
  const parallaxs = useParallax({
    translateY: [-50, 70, "easeInOut"],
    scale: [0, 1, "easeOutBack"],
  });
  const parallax2 = useParallax({
    translateY: [-20, 10, "easeInOut"],
    scale: [0, 1, "easeOutBack"],
  });

  return (
    <>
      <Tilt tiltAngleXInitial="-10" tiltAngleYInitial="5">
        <div className="top" ref={parallaxs.ref}>
          <div className="middle">
            <div className="circle1 ic">
              <a href="#main">
                <span class="material-symbols-outlined">home</span>
              </a>
            </div>

            <div className="circle2 ic"></div>
            <div className="circle3 ic">
              <a href="#contact">
                <span class="material-symbols-outlined">mail</span>
              </a>
            </div>
            <div className="circle4 ic">
              <a href="#specialization">
                <span class="material-symbols-outlined">psychology</span>
              </a>
            </div>
            <div className="circle5 ic">
              <a href="#project">
                <span class="material-symbols-outlined">task</span>
              </a>
            </div>
            <div className="circle6 ic">
              <a href="">
                <span class="material-symbols-outlined">info</span>
              </a>
            </div>

            <div className="center">
              <img src={logoIcon} alt="" className="menu-icon" />
            </div>
          </div>
        </div>
      </Tilt>
      <Tilt tiltAngleXInitial="350" tiltAngleYInitial="-900">
        <div className="top-android" ref={parallax2.ref}>
          <div className="middle">
            <div className="center">
              <img src={logoIcon} className="menu-icon" />
            </div>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default Menu;
