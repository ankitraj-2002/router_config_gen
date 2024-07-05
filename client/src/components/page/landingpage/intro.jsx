import React from 'react';
import ReactDOM from 'react-dom';
import './intro.css';

const IntroductionCard = () => {
  return (
    <div className="card-container">
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
    </div>
  );
};

export default IntroductionCard;
