import React from 'react';
import './Footer.css'; // Import your CSS file
import {BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="name">Health Fit</div>
        <div className="rights">&copy; 2023 Health Fit<br/>All Rights Reserved</div>
      <div className="socials">
          <a href="https://www.linkedin.com/" className="social-link"><BsLinkedin/></a>
          <a href="https://github.com/" className="social-link"><BsGithub/></a>
          <a href="https://www.youtube.com/" className="social-link"><BsInstagram/></a>
      </div>
    </footer>
  );
};

export default Footer;
