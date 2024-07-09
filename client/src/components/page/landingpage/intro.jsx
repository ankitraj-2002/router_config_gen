import React from 'react';
import Slider from 'react-slick';
import './intro.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IntroductionCard = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="card">
          <h4 className="card-title">ConfigMaster</h4>
          <p className="card-content">
            Introducing ConfigMaster, the ultimate solution for seamless network 
            device management. ConfigMaster generates configuration codes for routers 
            and switches with ease, ensuring precise and efficient setups every time. 
            Our tool features a robust SSH functionality, enabling users to remotely 
            access and configure their network devices directly from the platform. 
            Additionally, ConfigMaster provides a backup feature, allowing users to 
            securely save and manage existing configurations on their routers and switches. 
            Simplify your network management with ConfigMaster – your comprehensive tool for
            generating, configuring, and safeguarding your network infrastructure.
          </p>
          <div className="card-actions">
            <a href="#learn-more" className="card-button">Learn More</a>
          </div>
        </div>
        {/* <div className="card">
          <h4 className="card-title">presetGen</h4>
          <p className="card-content">
            The presetGen feature of our React web app offers a streamlined and 
            efficient way for users to generate configuration code for various network 
            components. By selecting a desired component from a dropdown menu, users can 
            input necessary parameters and click "Generate Code" to automatically produce 
            the corresponding configuration commands. This feature includes fetching dynamic 
            data from an API, ensuring that the options presented are always up-to-date. With 
            components such as Class of Service Interface, Firewall, Policer, Interface, and more,
             users can easily configure and manage their network settings. The intuitive interface 
             simplifies complex tasks, making network management accessible and efficient for all users.
          </p>
          <div className="card-actions">
            <a href="#learn-more" className="card-button">Learn More</a>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};

export default IntroductionCard;
