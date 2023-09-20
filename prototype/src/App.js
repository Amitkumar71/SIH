// App.js

import React from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import TopSection from './Components/Top_Section.jsx';
import Contact from './Components/contact.jsx';
import SelfAssessment from './Components/SelfAssessment.jsx';
import Questionnaire from './Components/Questionnare.jsx';
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
                <Contact />
              </>
            }
          />
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
