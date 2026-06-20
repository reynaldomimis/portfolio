import React from "react";

const Card = ({ src, title, description, aos = "fade-up" }) => {
  return (
    <div
      data-aos={aos}
      className="
        h-full text-center
        rounded-xl
        bg-[rgba(17,24,39,0.65)]
        backdrop-blur-xl
        border border-white/10
        shadow-md
        p-6
        flex flex-col items-center justify-center
        transition hover:scale-[1.02]
      "
    >
      <img
        src={src}
        alt={title || "icon"}
        className="w-12 h-12 object-contain mb-3"
        loading="lazy"
      />

      <h5 className="text-white font-bold mb-2">
        {title}
      </h5>

      <p className="text-gray-400 text-sm text-center">
        {description || "Specialized skill and expertise"}
      </p>
    </div>
  );
};

export default Card;