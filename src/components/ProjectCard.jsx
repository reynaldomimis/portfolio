import React, { useState, useRef, useEffect } from "react";

const ProjectCard = ({
  image,
  title,
  description,
  techIcons = [],
  liveLink,
  codeLink,
  aos = "fade-up",
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    if (descRef.current) {
      const el = descRef.current;
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, [description]);

  return (
    <div
      data-aos={aos}
      data-aos-duration="800"
      className="
        h-full flex flex-col overflow-hidden
        rounded-xl
        bg-[rgba(17,24,39,0.65)]
        backdrop-blur-xl
        border border-white/10
        shadow-md
        transition-all duration-300
        hover:scale-[1.01] hover:shadow-xl
        min-h-[320px]
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-2.5 flex flex-col flex-1">
        {/* TITLE */}
        <h5 className="text-white font-semibold text-sm mb-1.5">{title}</h5>

        {/* TECH ICONS */}
        <div className="flex flex-wrap gap-1 mb-2">
          {techIcons.length > 0 ? (
            techIcons.map((icon, i) => (
              <div
                key={i}
                className="w-5 h-5 bg-gray-800 rounded flex items-center justify-center"
              >
                <img
                  src={icon}
                  alt="tech"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
            ))
          ) : (
            <small className="text-gray-500 text-[10px]">
              No technologies listed
            </small>
          )}
        </div>

        {/* DESCRIPTION */}
        <div className="mb-2">
          <p
            ref={descRef}
            onClick={() => setExpanded(!expanded)}
            className={`
              text-gray-400 text-xs leading-snug cursor-pointer
              transition-all duration-300
              ${expanded ? "" : "line-clamp-2"}
            `}
          >
            {description}
          </p>

          {isClamped && (
            <span
              onClick={() => setExpanded(!expanded)}
              className="text-cyan-400 text-xs cursor-pointer hover:underline"
            >
              {expanded ? "Show less" : "Read more"}
            </span>
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2 mt-auto">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="
                flex-1 text-center py-2 px-2
                bg-blue-600 hover:bg-blue-700
                text-white text-sm rounded-md
                transition focus:outline-none focus:ring-0
              "
            >
              Live
            </a>
          )}

          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noreferrer"
              className="
                flex-1 text-center py-2 px-2
                border border-white/30
                text-white text-sm rounded-md
                hover:bg-white/10
                transition focus:outline-none focus:ring-0
              "
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
