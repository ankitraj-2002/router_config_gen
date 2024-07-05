// TeamSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; // Create this CSS file for custom styles

const TeamSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const teamMembers = [
    {
      name: "James Wilson",
      role: "Software Developer",
      image: "path-to-image1.jpg", // Update with actual image paths
    },
    {
      name: "Sarah Johnson",
      role: "Graphic Designer",
      image: "path-to-image2.jpg",
    },
  ];

  return (
    <div className="team-slider">
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <button>Message</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
