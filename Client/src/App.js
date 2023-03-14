//import './App.css';
import { amenities } from "./components/amenities"

export default function App() {
  return (
    <div className="App">
      <h3>Price</h3>
        <div className="price-input">
          <div className="field">
          <span>Min</span>
        <input type="number" className="input-min" value="100"></input>
          </div>
        </div>
        <div className="price-input">
          <div className="field">
          <span>Max</span>
        <input type="number" className="input-max" value="10000"></input>
          </div>
        </div>
        <div className="slider">

        </div>
      
      <h3>Amenities</h3>
      <ul className="amenities-list">
        {amenities.map(({name}, index) => {
          return (
            <li key={index}>
              <div className ="amenities-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    name={amenities.map.name}
                    value={name}
                    />
                    <label htmlFor={`custom-checkbox`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      
      <h3>Tag Category</h3>
        <input
        type="checkbox"/>
      <label htmlFor={`custom-checkbox`}>{"Tag"}</label>
    </div>
  );
}


