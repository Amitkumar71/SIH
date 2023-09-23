import React, { Component } from 'react';
import './Dashboard2.css';
import profile_img from '../images/top.png';
import {MdOutlineAssessment} from 'react-icons/md'
import {BsFillBarChartLineFill} from 'react-icons/bs'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="left-section">
          <div className="profile-image">
            <img src={profile_img} alt="Profile" />
          </div>
          <div className="details">
            <div className="detail-item">
              <h2>Name: John Doe</h2>
            </div>
            <div className="detail-item">
              <p> <MdOutlineAssessment />   Assessments taken: 3</p>
            </div>
            <div className="detail-item">
              <p><BsFillBarChartLineFill /> Average stress levels: 3.2</p>
            </div>
          </div>
        </div>
        <div className="right-section">
            <div className='right-heading'><h2>Assessment History</h2></div>
          <div className="assessment-cards">
            <div className="assessment-card">
              <h3>Assessment 1</h3>
              <p>Date: 2023-09-23</p>
              <p>Result: high Stress</p>
              <div className="indicator high"></div>
            </div>
            <div className="assessment-card">
              <h3>Assessment 2</h3>
              <p>Date: 2023-09-20</p>
              <p>Result: Low stress</p>
              <div className="indicator low"></div>
            </div>
            <div className="assessment-card">
              <h3>Assessment 3</h3>
              <p>Date: 2023-09-18</p>
              <p>Result: Medium Stress</p>
              <div className="indicator medium"></div>
            </div>
          </div>
          <div className="add-interests">
            <h2>Add Interests</h2>
            <input type="text" placeholder="Enter your interests" />
            <button>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
