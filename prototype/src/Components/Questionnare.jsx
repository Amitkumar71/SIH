import React, { useState } from 'react';
import './Questionnaire.css';
import { useEffect } from 'react';

function YourComponent() {
  const questions = [
    {
      id: 'question1',
      text: '1-How often do you feel overwhelmed or stressed?',
      options: ['Rarely', 'Occasionally', 'Frequently', 'Constantly'],
    },
    {
      id: 'question2',
      text: '2-During the past 4 weeks, have you had any problems with your work or daily life due to your physical health?',
      options: ['Yes', 'No', 'Not Sure'],
    },
    {
      id: 'question3',
      text: "3-Are you able to get a good night's sleep most nights?",
      options: ['Yes, regularly', 'Sometimes', 'Never'],
    },
    {
      id: 'question4',
      text: '4-Have you seen a therapist in the recent past?',
      options: ['Yes', 'No'],
    },
    {
      id: 'question5',
      text: '5-Do you find it difficult to concentrate or make decisions?',
      options: ['Not at all', 'Occasionally', 'All the time'],
    },
    {
      id: 'question6',
      text: '6-Do you have any thoughts of self-harm or suicide?',
      options: ['No, not at all', 'Rarely, and they pass quickly', 'Sometimes, but I would never act on them', 'Yes, I often think about it or have a plan'],
    },
    {
      id: 'question7',
      text: '7-When was the last time you felt good about yourself?',
      options: ['Few days ago', 'Few weeks ago', 'Few months ago', 'Few years ago', "I don't remember"],
    },
    {
      id: 'question8',
      text: '8-Have you noticed any change in your diet habits?',
      options: ['Yes, I eat too much', 'Yes, I don\'t feel hungry', 'Not much', 'No change'],
    },
    {
      id: 'question9',
      text: '9-Have you been diagnosed with any form of depression in the past?',
      options: ['Yes', 'No'],
    },
    {
      id: 'question10',
      text: '10-Are you satisfied with your current social and personal life?',
      options: ['Very satisfied', 'Somewhat satisfied', 'Not very satisfied', 'Not satisfied at all'],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState(
    questions.reduce((acc, question) => {
      acc[question.id] = '';
      return acc;
    }, {})
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions({
      ...selectedOptions,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedOptions);
  };

  const handleSubmit_btn = (event) => {
    event.preventDefault();
    console.log(selectedOptions);
    alert("Thank you for taking the time to fill out this survey. Your responses will be kept confidential.");
    window.location.reload();
  }
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='questionnair-main'>
      <h2>Please take a few minutes to fill out this survey on the overall status of your mental health. We value your feedback and your responses will be kept confidential.</h2>
      <div className="questions-container">
        <form onSubmit={handleSubmit}>
          {questions.map((question) => (
            <div className="question" key={question.id}>
              <label className="question-label">{question.text}</label>
              {question.options.map((option) => (
                <div className="option" key={option}>
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    onChange={handleInputChange}
                    checked={selectedOptions[question.id] === option}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          ))}
          <div className="submit-button">
            <button type="submit" on onClick={handleSubmit_btn}>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default YourComponent;
