import React, { useState } from "react"
import "./Location.css";
import SearchBar from "../SearchBar/SearchBar";

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
          placeholder='Ex: Santa Clara, San Francisco..' />
      </div>
    </div>
  );
};

export default Location;