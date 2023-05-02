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
        <select onChange={(e) => handleChange(e)}>
          <option value=''>Santa Clara, San Francisco..</option>
          <option value='san jose'>San Jose</option>
          <option value='las vegas'>Las Vegas</option>
        </select>
        {/* <input
          type="text"
          required
          value={location}
          onChange={(e) => handleChange(e)}
          placeholder='Santa Clara, San Francisco..' /> */}
      </div>
    </div>
  );
};

export default Location;