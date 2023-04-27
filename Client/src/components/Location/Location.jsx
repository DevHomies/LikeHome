import React, { useState } from "react"
import "./Location.css";

const Location = ({parentCallback}) => {
  const [location, setlocation] = useState("");

  const handleChange = (e) => {
    setlocation(e.target.value);
    parentCallback("location", e.target.value);
  }
  
  return (
    <div className="WholeLocationContainer">
      <div className='subContainer'>
        <p>Location</p>
        <input
          type="text"
          required
          value={location}
          onChange={(e) => handleChange(e)}
          placeholder='Santa Clara, San Francisco..' />
      </div>
    </div>
  );
};

export default Location;