import React from "react"
import "./Location.css";

const Location = () => {
  return (
    <div className="WholeLocationContainer">
      <div className='subContainer'>
          <p>Location</p>
          <input type='text' 
          placeholder='Ex: Santa Clara, San Francisco..' />
      </div>
    </div>
  );
};

export default Location;