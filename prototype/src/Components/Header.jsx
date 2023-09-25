import React from 'react';
import './Header.css';
// import {BsDroplet,Prof} from 'react-icons/bs'
import image from'../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
      <div className="logo">
        <img src={image} alt="" />
      </div>
      </Link>
      <div className="left-buttons">
        <Link to="/"><button>Home</button></Link>
        <Link to="/dashboard"><button>Dashboard</button></Link>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
