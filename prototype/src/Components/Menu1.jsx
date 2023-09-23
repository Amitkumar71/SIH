import React from "react";

function MenuItem1({ image, name }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <p>{name}</p> 
    </div>

  );
}

export default MenuItem1;
