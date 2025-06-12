import React from "react";

const Services = () => {
  return (
    <div
      className="service container d-flex flex-row justify-content-around align-items-center rounded"
      style={{
        minHeight: "16rem",
        backgroundColor: "#1c1726",
        marginTop: "4rem",
        padding: "1rem 3rem",
        width: "80%",
      }}
      data-aos="zoom-out-down"
    >
      <div
        className="try d-flex flex-column justify-content-center"
        style={{ width: "70%", gap: "20px" }}
      >
        <span className="text-white fw-semibold" style={{ fontSize: "48px" }}>
          Let’s try my service now!
        </span>
        <p style={{ fontSize: "20px", color: "#8c7db0" }}>
          I can provide clean code and also make the website more interactive
          with web animations. A responsive design makes your website accessible
          to all users, regardless of their device.
        </p>
      </div>

      <div
        className="btn d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#fa1e4e",
          width: "174px",
          height: "54px",
          margin: "0 2rem",
          clipPath:
            "polygon(10% 0, 100% 0, 100% 20%, 100% 69%, 89% 100%, 20% 100%, 0 100%, 0 27%)",
          cursor: "pointer",
        }}
        data-aos="zoom-in-right"
      >
        <a
          href="https://reymimz.github.io/resume/reynaldomimis.pdf"
          download
          className="text-white text-decoration-none"
          style={{ padding: "2rem 1rem" }}
        >
          <span className="fw-medium" style={{ fontSize: "18px" }}>
            Download CV
          </span>
        </a>
      </div>
    </div>
  );
};

export default Services;
