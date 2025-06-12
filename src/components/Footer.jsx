import React from "react";

const Footer = () => {
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
    <footer
      className="d-flex justify-content-between align-items-center w-100"
      style={{
        minHeight: "6rem",
        backgroundColor: "#1c1726",
        padding: "1rem 2rem",
      }}
    >
      <span className="text-white fw-semibold" style={{ fontSize: "24px" }}>
        © Reynaldo C. Mimis 2022.
      </span>

      <div
        className="d-flex align-items-center"
        style={{
          width: "13rem",
          padding: "1rem 2rem",
          marginRight: "2rem",
          gap: "10px",
        }}
      >
        {linkIcon.map((item, i) => (
          <a href={item.link} key={i}>
            <img
              src={item.icon}
              alt=""
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
