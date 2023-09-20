import React from 'react';
import './Header.css';
// import {BsDroplet,Prof} from 'react-icons/bs'
import image from'../images/logo.png'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={image} alt="" />
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
