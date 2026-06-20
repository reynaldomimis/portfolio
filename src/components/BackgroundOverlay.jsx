import React from "react";

const BackgroundOverlay = () => {
  return (
    <>
      {/* OVERLAY BOTTOM */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            linear-gradient(to bottom, transparent 50%, #020617 100%),
            radial-gradient(circle at bottom right, rgba(15, 23, 42, 0.9), transparent 60%),
            radial-gradient(circle at bottom left, rgba(2, 6, 23, 0.8), transparent 70%)
          `,
        }}
      />

      {/* FLOATING GLASS LAYER */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
    </>
  );
};

export default BackgroundOverlay;
