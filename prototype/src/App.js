// App.js

import React from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import TopSection from './Components/Top_Section.jsx';
import Contact from './Components/contact.jsx';
import SelfAssessment from './Components/SelfAssessment.jsx';
import Questionnaire from './Components/Questionnare.jsx';
import ServicesComponent from './Components/OurServices.jsx';
import SuccessStories from './Components/Stories.jsx';
import Footer from './Components/Footer';
import Charts from './Components/Charts.jsx';
import Dashboard2 from './Components/Dashboard2';
import Activities from './Components/FunActivities.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TopSection />
                <SelfAssessment />
                <ServicesComponent />
                <SuccessStories />
                <Charts />
                <Contact />
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard2 />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
