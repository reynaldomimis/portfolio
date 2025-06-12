const ProjectCard = ({
  image,
  title,
  description,
  techIcons,
  liveLink,
  codeLink,
}) => {
  return (
    <div
      className="card h-100 shadow-sm border-0"
      style={{ backgroundColor: "#131019C1", color: "white" }}
    >
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ color: "white" }}>
          {title}
        </h5>
        <p className="card-text" style={{ flexGrow: 1, color: "#eee" }}>
          {description}{" "}
          <span style={{ color: "gray", cursor: "pointer" }}>...see more</span>
        </p>

        <div className="mb-3 d-flex gap-2">
          {techIcons.map((icon, index) => (
            <img key={index} src={icon} alt="tech" style={{ height: "25px" }} />
          ))}
        </div>

        <div className="d-flex gap-2">
          <a
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="btn"
            style={{
              backgroundColor: "#fa1e4e",
              color: "white",
              width: "50%",
              border: "none",
            }}
          >
            Live demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="btn"
            style={{
              borderColor: "#fa1e4e",
              color: "#fa1e4e",
              backgroundColor: "transparent",
              width: "50%",
            }}
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
