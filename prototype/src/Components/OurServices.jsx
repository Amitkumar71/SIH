import React from 'react';
import './OurServices.css';

const ServicesComponent = () => {
  return (
    <div className='main'>
      <div className='Heading'>
        <p><span style={{ color: 'white', fontSize: '70px' }}>_</span><br/>OUR<br/>SERVICES</p>
      </div>
    <div className="services-container">
      <div className="service-item">
        <i className="fas fa-clock"></i>
        <p>SELF<br/>ASSESMENT</p>
      </div>
      <div className="service-item">
        <i className="fas fa-map-marker-alt"></i>
        <p>Nearby<br/>Help</p>
      </div>
      <div className="service-item">
        <i className="fas fa-heartbeat"></i>
        <p>Fun<br/>Activities</p>
      </div>
      <div className="service-item">
        <i className="fas fa-heartbeat"></i>
        <p>Healthy<br/>Lifestyle</p>
      </div>

    </div>
    </div>
  );
};

export default ServicesComponent;
