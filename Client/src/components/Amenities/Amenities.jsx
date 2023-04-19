import './amenities.css';
import React, { useState } from 'react';


export const starRatingList =[
  {
    label: '🌟',
  },
  {
    label: '🌟🌟',
  },
  {
    label: '🌟🌟🌟',
  },
  {
    label: '🌟🌟🌟🌟',
  },
  {
    label: '🌟🌟🌟🌟🌟',
  }
];

 export const Amenities = (props) =>  {
  const [count, setCount] = useState(3);
  const [visible, setVisible] = useState(false);
  const [minimum, setMinimum] = useState(null);
  const [maximum, setMaximum] = useState(null);

  const handleShowMore = () => {
    setCount(count + 7);
  }

  const handleShowLess = () => {
    setCount(count - 7);
  }

  // Display original price range if user cancels
  function handleCancel() {
    setVisible(false);
    document.getElementById("lowerBound").value = minimum;
    document.getElementById("upperBound").value = maximum;
  }

  // Display new price changes + update price range state if user applies
  function handleApply() {
    setVisible(false);
    setMinimum(document.getElementById("lowerBound").value);
    setMaximum(document.getElementById("upperBound").value);
    props.handleOnChangePrice(document.getElementById("lowerBound").value, document.getElementById("upperBound").value);
  }

  return (
    <div className="Amenities">
      <h3>Price</h3>
      <div className="pay-range-container">
        <div className= {visible? "input-container focus": "input-container"}>
            <div className='input-field'>
              <label htmlFor='lowerBound'>$</label>
              <input maxlength = "4" id="lowerBound" type="number" name="lowerBound" placeholder="e.g. 200" onFocus={() => {setVisible(true)}} />
            </div>
            <div className='input-line'></div>
            <div className='input-field'>
              <label htmlFor='upperBound'>$$$</label>
              <input max = "10000" id="upperBound" type="number" name="upperBound" placeholder="e.g. 500" onFocus={() => {setVisible(true)}} />
            </div>
        </div>
        <div className= {visible? "submit-container": "hidden"}>
             <button className="button cancel" onClick = {handleCancel}>Cancel</button>
              <button className="button apply" onClick = {handleApply}>Apply changes</button>
        </div>
      </div>

    <div className='amenities-container'>
      <h3>Amenities</h3>
      {props.items.slice(0, count).map(({name}, index) => (
           <div className="left-section">
            <input
                type="checkbox"
                name='amenitiesList.map.name'
                value={name}
                id={name}
                onChange = {() => {props.handleOnChangeFilters(index)}}
                />
            <label htmlFor={name}>{name}</label>
          </div>  
      ))}
     {count < props.items.length ? (
        <button className="toggle" onClick={handleShowMore}>Show more</button>
      ) : (
        <button className="toggle" onClick={handleShowLess}>Show less</button>
      )}
   </div> 

    <div className='star-container'>
      <h3>Star Rating</h3>
      <ul className="amenities-list">
        {starRatingList.map(({label}, index) => {
          return (
            <li key={index}>
              <div className ="amenities-list-item">
                <div className="left-section"> 
                  <input
                    type="checkbox"
                    name={starRatingList.map.label}
                    value={label}
                    id={label}
                    onChange = {() => props.handleOnChangeStars(index)}
                    />
                    <label htmlFor={label}>{label}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
  ); 
}
export default Amenities;