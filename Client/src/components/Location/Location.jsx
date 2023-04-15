import React, { useState } from "react"
import "./Location.css";

const Location = () => {
  const [location, setlocation] = useState("");
  
  return (
    <div className="WholeLocationContainer">
      <div className='subContainer'>
        <p>Location</p>
        <input
          type="text"
          required
          value={location}
          onChange={(e) => setlocation(e.target.value)}
          placeholder='Santa Clara, San Francisco..' />
      </div>
    </div>
  );
};

export default Location;