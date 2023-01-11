import React from "react";
import "./styled.scss";

const CQuotes = ({ dev, title, content, dp, aos}) => {
  return (
    <>
      <div className="quotes" data-aos={aos}>
        <img
          src="https://res.cloudinary.com/dkbbweo5x/image/upload/v1669440535/portfolio-assets/quotes_ezbuv9.png"
          alt=""
          className="icon"
        />
        <p>{content}</p>
        <div className="profiles">
          <img src={dp} alt="" className="dp" />
          <div className="profile-wrapper">
            <span className="c-name">{dev}</span>
            <span className="pos">{title}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CQuotes;
