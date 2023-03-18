import './amenities.css';
import React, { useState } from 'react';

export const amenitiesList = [
  {
    name: "Free Wi-Fi"
  },
  {
    name: "Gym"
  },
  {
    name: "Pool"
  },
  {
    name: "Pet friendly"
  },
  {
    name: "Hot tub"
  },
  {
    name: "Breakfast included"
  },
  {
    name: "Kitchen"
  },
  {
    name: "Air conditioned"
  },
  {
    name: "Spa"
  },
  {
    name: "Restaurant"
  }
];

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

 export const Amenities = () =>  {
  // 1st Edit: Have functions within the Functional Component!
  const [count, setCount] = useState(3);

  const handleShowMore = () => {
    setCount(count + 3);
  }

  const handleShowLess = () => {
    setCount(count - 3);
  }
  // End of 1st Edit

  return (
    <div className="Amenities">
      <h3>Price</h3>
       <div className="input-container">
          <div className='input-field'>
            <label htmlFor='lowerBound'>$</label>
            <input type="number" name="lowerBound" placeholder="200" />
          </div>
          <div className='input-line'></div>
          <div className='input-field'>
            <label htmlFor='upperBound'>$$$</label>
            <input type="number" name="upperBound" placeholder="500" />
          </div>
      </div>

      <h3>Amenities</h3>
      <ul className="amenities-list">
        {amenitiesList.map(({name}, index) => {
          return (
            <li key={index}>
              <div className ="amenities-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    name='custom-checkbox'
                    value={name}
                  />
                  <label htmlFor='custom-checkbox'>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* 2nd Edit: Had to add the extra {} around name in the params and moved into the functional component */}
      {amenitiesList.slice(0, count).map(({name}, index) => (
        <div key={index}>{name}</div>
      ))}

      {count < amenitiesList.length ? (
        <button onClick={handleShowMore}>Show More</button>
      ) : (
        <button onClick={handleShowLess}>Show Less</button>
      )}
      {/* End of 2nd Edit */}

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
                    />
                    <label htmlFor={`custom-checkbox`}>{label}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  ); 
}

// 3rd Edit: You accidently REPLACED Amenities with the new function you made, So the entire component stopped being rendered
export default Amenities;