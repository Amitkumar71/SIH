import React from 'react';
import './Header.css';
import image from'../images/Top.jpg'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src= {image} alt="Logo" />
      </div>
      <div className="left-buttons">
        <button>Login</button>
        <button>Sign-up</button>
        <button>Dashboard</button>
      </div>
    </div>
  );
};

export default Header;
