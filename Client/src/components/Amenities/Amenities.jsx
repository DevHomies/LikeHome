import './amenities.css';
import React, { useState } from 'react';

// export const amenitiesList = [
//   {
//     name: "Free Wi-Fi"
//   },
//   {
//     name: "Gym"
//   },
//   {
//     name: "Pool"
//   },
//   {
//     name: "Pet friendly"
//   },
//   {
//     name: "Hot tub"
//   },
//   {
//     name: "Breakfast included"
//   },
//   {
//     name: "Kitchen"
//   },
//   {
//     name: "Air-conditioned"
//   },
//   {
//     name: "Spa"
//   },
//   {
//     name: "Restaurant"
//   }
// ];

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

  const handleShowMore = () => {
    setCount(count + 7);
  }

  const handleShowLess = () => {
    setCount(count - 7);
  }

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
        <button onClick={handleShowMore}>Show More</button>
      ) : (
        <button onClick={handleShowLess}>Show Less</button>
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