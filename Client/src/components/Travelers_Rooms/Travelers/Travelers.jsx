import "./Travelers.css";
import React, {useState} from "react";

function Travelers() {

  const[selects, setSelects] = useState();
    return (
      <div className="TrWrap">
        <label>Travelers</label>
        <select value = {selects} onChange = {e => setSelects(e.target.value)}>
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

export default Travelers;