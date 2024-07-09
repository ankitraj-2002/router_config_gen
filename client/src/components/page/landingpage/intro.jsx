import React from 'react';
import Slider from 'react-slick';
import { Container, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import './intro.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IntroductionSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '50px', // Add padding to prevent overlap
  };

  return (
    <Container className="slider-container">
      <Slider {...settings}>
        <div>
          <Card className="custom-card">
            <CardContent>
              <Typography variant="h4" className="custom-card-title">ConfigMaster</Typography>
              <Typography variant="body1" className="custom-card-content">
                Introducing ConfigMaster, the ultimate solution for seamless network 
                device management. ConfigMaster generates configuration codes for routers 
                and switches with ease, ensuring precise and efficient setups every time. 
                Our tool features a robust SSH functionality, enabling users to remotely 
                access and configure their network devices directly from the platform. 
                Additionally, ConfigMaster provides a backup feature, allowing users to 
                securely save and manage existing configurations on their routers and switches. 
                Simplify your network management with ConfigMaster – your comprehensive tool for
                generating, configuring, and safeguarding your network infrastructure.
              </Typography>
            </CardContent>
            <CardActions className="custom-card-actions">
              <Button variant="contained" color="primary" href="#learn-more" className="custom-card-button">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className="custom-card">
            <CardContent>
              <Typography variant="h4" className="custom-card-title">PresetGen</Typography>
              <Typography variant="body1" className="custom-card-content">
                The presetGen feature of our React web app offers a streamlined and 
                efficient way for users to generate configuration code for various network 
                components. By selecting a desired component from a dropdown menu, users can 
                input necessary parameters and click "Generate Code" to automatically produce 
                the corresponding configuration commands. This feature includes fetching dynamic 
                data from an API, ensuring that the options presented are always up-to-date. With 
                components such as Class of Service Interface, Firewall, Policer, Interface, and more,
                users can easily configure and manage their network settings. The intuitive interface 
                simplifies complex tasks, making network management accessible and efficient for all users.
              </Typography>
            </CardContent>
            <CardActions className="custom-card-actions">
              <Button variant="contained" color="primary" href="#learn-more" className="custom-card-button">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className="custom-card">
            <CardContent>
              <Typography variant="h4" className="custom-card-title">ConfigGen</Typography>
              <Typography variant="body1" className="custom-card-content">
              The ConfigGen feature of the ConfigMaster React web app transforms network device
              management by providing an intuitive and efficient way to generate configuration 
              codes for routers and switches. Users can effortlessly navigate through a dynamic 
              list of command options, input necessary parameters, and produce precise configuration
              commands with just a few clicks. By fetching real-time data and guiding users through
              a streamlined selection process, ConfigGen ensures accurate and up-to-date configurations,
              making complex network management tasks accessible and manageable for all users.
              </Typography>
            </CardContent>
            <CardActions className="custom-card-actions">
              <Button variant="contained" color="primary" href="#learn-more" className="custom-card-button">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card className="custom-card">
            <CardContent>
              <Typography variant="h4" className="custom-card-title">sshTerminal</Typography>
              <Typography variant="body1" className="custom-card-content">
                The SSH Terminal feature in our React web app 
                allows users to seamlessly SSH into remote routers and switches directly 
                from the application. This powerful tool enables users to configure their
                network devices with ease, streamlining the process of remote management. 
                Additionally, sshterminal offers a robust backup feature that allows users
                to take backups of existing configurations. In case of any failures, these
                backups can be used to quickly rollback to a stable state, ensuring network
                reliability and minimizing downtime.
              </Typography>
            </CardContent>
            <CardActions className="custom-card-actions">
              <Button variant="contained" color="primary" href="#learn-more" className="custom-card-button">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </Slider>
    </Container>
  );
};

export default IntroductionSlider;
