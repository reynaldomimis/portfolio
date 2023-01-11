import React from "react";
import "./styled.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import ProjectSlides from "../../components/ProjectSlides/ProjectSlides";

const ProjectScreens = ({ id }) => {
  const projectData = [
    {
      title: "Project 1",
      des: "This is a android based Covid-Visualizer",
    },
    {
      title: "Project 2",
      des: "Lorem Ipsum Gwapo",
    },
    {
      title: "Project 3",
      des: "Lorem Ipsum Gwapo",
    },
    {
      title: "Project 4",
      des: "Lorem Ipsum Gwapo",
    },
  ];

  return (
    <div id={id} className="project">
      <div
        className="p-title"
        data-aos="fade-down-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <p>
          Recent <b>Projects</b>
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {projectData.map((item, i) => {
          return (
            <SwiperSlide>
              <ProjectSlides title={item.title} key={i} des={item.des} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProjectScreens;
