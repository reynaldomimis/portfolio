import React from "react";

const Quotes = ({ dev, title, content, dp, aos }) => {
  return (
    <div
      className="quotes bg-dark text-white rounded p-4 d-flex flex-column justify-content-between gap-3"
      data-aos={aos}
      style={{ minHeight: "23rem", backgroundColor: "#121119" }}
    >
      <img
        src="https://res.cloudinary.com/dkbbweo5x/image/upload/v1669440535/portfolio-assets/quotes_ezbuv9.png"
        alt="quote icon"
        className="mb-2"
        style={{ width: "42px", height: "27px" }}
      />
      <p className="mb-1">{content}</p>
      <div className="d-flex align-items-center gap-3">
        <img
          src={dp}
          alt="profile"
          className="rounded-circle"
          style={{ width: "60px", height: "60px" }}
        />
        <div className="d-flex flex-column">
          <span className="fw-semibold fs-5">{dev}</span>
          <span className="text-secondary">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
