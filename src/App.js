// import React, { useEffect } from "react";
// import { Main, About, Specialization, Project } from "./screens";
// import AOS from "aos";
// import "./App.css";
// import { CFooter } from "./components";
// import Services from "./components/Services";
// import Header from "./components/Header";

// const App = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <div className="app">
//       {/* <CScrollTop /> */}
//       <Header />
//       <Main id="main" />
//       <About id="about" />
//       <Specialization id="specialization" />
//       <Project id="project" />
//       <Services id="services" />
//       <CFooter />
//     </div>
//   );
// };

// export default App;

import React, { useEffect } from "react";
// import { Main, About, Specialization, Project } from "./screens";
import AOS from "aos";
// import "./App.css";
// import { CFooter } from "./components";
// import Services from "./components/Services";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainScreens from "./screens/MainScreen";
import { Main, About, Project, Specialization } from "./screens";
// import { injector, books, movies, software } from "./data/data";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialization" element={<Specialization />} />
          {/* <Route path="/movies" element={<SwiperCard data={movies} />} />
   
          {/* Add more routes as needed */}
        </Routes>
        {/* <DiscoverSection />
        <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
