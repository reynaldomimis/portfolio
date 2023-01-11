import React from "react";
import "./styled.scss";

const CCard = ({ src, title, description, aos }) => {
  return (
    <>
      <div className="ccard" data-aos={aos}>
        <img src={src} alt="" className="icon" />
        <span className="t2">{title}</span>
        <span className="des">{description}</span>
      </div>
    </>
  );
};

export default CCard;
