import React from 'react';
import './OurServices.css';

const ServicesComponent = () => {
  return (
    <div className='main'>
        {/* <p>OUR SERVICES</p>43 */}
    <div className="services-container">
      <div className="service-item">
        <i className="fas fa-clock"></i>
        <p>24/7 Support</p>
      </div>
      <div className="service-item">
        <i className="fas fa-map-marker-alt"></i>
        <p>Nearby Help</p>
      </div>
      <div className="service-item">
        <i className="fas fa-heartbeat"></i>
        <p>Monitor Stress</p>
      </div>
    </div>
    </div>
  );
};

export default ServicesComponent;
