import React, { useState } from 'react';
import './Questionnaire.css'; 

const Questionnaire = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="questionnaire-container">
      <h2>Mental Health Questionnaire</h2>
      <form>
        <div className="question">
          <label>1. How are you feeling today?</label>
          <input type="text" name="question1" onChange={handleInputChange} />
        </div>
        <div className="question">
          <label>2. On a scale of 1 to 10, how stressed are you?</label>
          <input type="range" name="question2" min="1" max="10" onChange={handleInputChange} />
        </div>
        <div className="question">
          <label>3. Are you getting enough sleep?</label>
          <select name="question3" onChange={handleInputChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="question">
          <label>4. Do you engage in regular physical activity?</label>
          <select name="question4" onChange={handleInputChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="question">
          <label>5. How would you rate your overall mood today?</label>
          <input type="number" name="question5" min="1" max="10" onChange={handleInputChange} />
        </div>
        <div className="question">
          <label>6. Are you experiencing any work-related stress?</label>
          <input type="checkbox" name="question6" onChange={handleInputChange} />
        </div>
        <div className="question">
          <label>7. How do you cope with stress?</label>
          <textarea name="question7" onChange={handleInputChange}></textarea>
        </div>
        <div className="question">
          <label>8. Are you satisfied with your social life?</label>
          <select name="question8" onChange={handleInputChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="question">
          <label>9. Are you experiencing any physical symptoms of stress (e.g., headaches, fatigue)?</label>
          <input type="checkbox" name="question9" onChange={handleInputChange} />
        </div>
        <div className="question">
          <label>10. Have you sought professional help for managing stress?</label>
          <select name="question10" onChange={handleInputChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;
