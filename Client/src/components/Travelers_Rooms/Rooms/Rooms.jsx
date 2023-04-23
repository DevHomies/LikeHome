import "./Rooms.css";
import React, {useState} from "react";

function Rooms({parentCallback}) {
  const[selects, setSelects] = useState();
  const handleChange = (e) => {
    setSelects(e.target.value);
    parentCallback("rooms", e.target.value);
  }

    return (
      <div className="RoWrap">
        <label>Rooms</label>
        <select value = {selects} onChange = {e => handleChange(e)}>
            <option> 1 </option>
            <option> 2 </option>
            <option> 3 </option>
            <option> 4 </option>
            <option> 5 </option>
            <option> + </option>
        </select>
      </div>
  
    );  

}

export default Rooms;