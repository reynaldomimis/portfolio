import React from "react";
import "./styled.scss";

const CFooter = () => {
  const linkIcon = [
    {
      link: "https://github.com/reymimz",
      icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669961482/portfolio-assets/GitHub_agfcie.png",
    },
    {
      link: "https://www.facebook.com/jhon.guko",
      icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669961482/portfolio-assets/Facebook_lwsxea.png",
    },
    {
      link: "https://www.facebook.com/jhon.guko",
      icon: "https://res.cloudinary.com/dkbbweo5x/image/upload/v1669961482/portfolio-assets/Facebook_lwsxea.png",
    },
  ];

  return (
    <>
      <div className="cfooter">
        <span className="copyright">© Reynaldo C. Mimis 2022.</span>
        <div className="link-wrapper">
          {linkIcon.map((item, i) => {
            return (
              <>
                <a href={item.link}>
                  {" "}
                  <img key={i} src={item.icon} alt="" className="f-icon" />
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CFooter;
