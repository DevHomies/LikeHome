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
]
 export const Amenities = () =>  {
  return (
    <div className="Amenities">
      <h3>Price</h3>
       <div className="input-container">
          <input type="number" name="$" placeholder="200" />
          <input type="number" plceholder="$" />
      </div>

      <h3>Amenities</h3>
      <ul className="amenities-list">
        {amenitiesList.map((name, index) => {
          return (
            <li key={index}>
              <div className ="amenities-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    name={amenitiesList.map.name}
                    value={name}
                    />
                    <label htmlFor={`custom-checkbox`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      
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

function ShowMoreLess({ amenitiesList, initialCount }) {
  const [count, setCount] = useState(3);

  const handleShowMore = () => {
    setCount(count + 3); 
  };

  const handleShowLess = () => {
    setCount(3); 
  };

  return (
    <div>
      {amenitiesList.slice(0, count).map((name, index) => (
        <div key={index}>{name}</div>
      ))}
      {count < amenitiesList.length ? (
        <button onClick={handleShowMore}>Show More</button>
      ) : (
        <button onClick={handleShowLess}>Show Less</button>
      )}
    </div>
  );
}

export default ShowMoreLess;



