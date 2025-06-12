import React, { useState, useEffect } from "react";

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showScroll && (
        <div className="scroll-top" onClick={scrollTop}>
          <span class="material-symbols-sharp">arrow_upward</span>
        </div>
      )}
    </>
  );
};
export default ScrollTop;
