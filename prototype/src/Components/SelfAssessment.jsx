import React from 'react';
import './SelfAssessment.css';
import { Link } from 'react-router-dom';

const SelfAssessment = () => {
    return (
        <div className="self-assessment-container">
            <div className='content'>
                <h1 className='heading'>Improve Your Mental Health,<br />Improve Your Life</h1>
                <p className="quote">
                    Elevate your mental well-being to the top of your to-do list.
                    Happiness isn't a luxury; it's a core requirement. Embrace self-care as your daily ritual,
                    ensuring you're equipped to shine your brightest and share your best self with the world.
                    Your well-being is your superpower!
                </p>
                <Link to="/questionnaire">
                    <button className="button">Monitor Stress</button>
                </Link>
            </div>
        </div>
    );
};

export default SelfAssessment;
