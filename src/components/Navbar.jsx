import React, { useState } from "react";

const Navbar = ({onClick}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="d-flex justify-content-between align-items-center px-4 py-3">
        <h3 className="text-white fw-bold mb-0">REM.Hub</h3>

        {/* HAMBURGER - mobile only */}
        <button
          className="btn d-lg-none text-white fs-3"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* FULLSCREEN MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h3 className="fw-bold text-white">REM.Hub</h3>
            <button
              className="btn text-white fs-3"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <ul className="list-unstyled fs-4">
            <li className="mb-4">Injector</li>
            <li className="mb-4">eBooks</li>
            <li className="mb-4">Movies</li>
            <li className="mb-4">Software</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;