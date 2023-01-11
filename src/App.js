import React, { useEffect, useRef } from "react";
import MainScreens from "./screens/MainScreens/MainScreens";
import ClientScreens from "../src/components/CClient/CClient";
import ContactScreens from "./screens/ContactScreens/ContactScreens";
import ProjectScreens from "./screens/ProjectScreens/ProjectScreens";
import SpecializationScreens from "./screens/SpecializationScreens/SpecializationScreens";
import TestimonialScreens from "./screens/TestimonialScreens/TestimonialScreens";
import "./App.css";
import Footer from "./components/CFooter/CFooter";
import AOS from "aos";
import ScrollTop from "./components/ScrollTop/ScrollTop";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app">
      <ScrollTop />
      <MainScreens id="main" />
      <SpecializationScreens id="specialization" />
      <ProjectScreens id="project" />
      <ClientScreens />
      <TestimonialScreens id="testimonial" />
      <ContactScreens id="contact" />
      <Footer />
    </div>
  );
};

export default App;
