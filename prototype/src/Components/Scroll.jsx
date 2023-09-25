import React from 'react';
import './Scroll.css';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

function Scroll() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="scroll-to-top-button" onClick={scrollToTop}>
      Scroll to Top   <BsFillArrowUpCircleFill />
    </button>
  );
}

export default Scroll;
