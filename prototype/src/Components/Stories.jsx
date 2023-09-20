import React from 'react';
import './Stories.css';
import image1 from '../images/Story1.jpg'
import image3 from '../images/Story3.png'

const SuccessStories = () => {
  return (
    <div className="success-stories">
      <div className="stories-content">
         <h2 className='story-heading'>Success Stories</h2>
        <div className="image-container">
          <div className="story">
            <img src={image1} alt="Success Story 1" />
            <p>Moderate Stress</p>
          </div>
          <div className="story">
            <img src={image1} alt="Success Story 2" />
            <p>Moderate stress</p>
          </div>
          <div className="story">
            <img src={image3} alt="Success Story 3" />
            <p>High Stress</p>
          </div>
        </div>
        <button className="button">Read More</button>
      </div>
    </div>
  );
};

export default SuccessStories;
