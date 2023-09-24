import React from 'react';
import './Stories.css';
import image1 from '../images/story2.jpg';
import image2 from '../images/story2.jpg';
import image3 from '../images/story3.jpg';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      image: image1,
      review: "'The resources and techniques provided here have truly been a game-changer for me. I've learned how to relax, breathe, and regain my peace of mind. Highly recommended'",
      rating: 4,
    },
    {
      id: 2,
      image: image2,
      review: "'The articles, tips, and community support have been invaluable in helping me navigate stress and find a sense of calm. I've never felt more in control of my mental health. I'm so grateful for this resource!'",
      rating: 5,
    },
    {
      id: 3,
      image: image3,
      review: "'The guided meditation sessions have become a part of my daily routine, and I can't express how much they've improved my overall well-being. It's like having a personal stress coach in my pocket. Thank you!'",
      rating: 3, 
    },
  ];

  return (
    <div className="success-stories">
      <div className="stories-content">
        <h2 className="story-heading">Success Stories</h2>
        <div className="story-cards">
          {stories.map((story) => (
            <div className="story" key={story.id}>
              <img src={story.image} alt={`Success Story ${story.id}`} />
              <p className="review">{story.review}</p>
              <div className="star-rating">
                {Array.from({ length: story.rating }).map((_, index) => (
                  <span key={index} className="star-icon">
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="button">Read More</button>
      </div>
    </div>
  );
};

export default SuccessStories;
