import './amenities.css';
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


const Amenities = () =>  {
  return (
    <div className="Amenities">
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
      
      <h3>Amenities</h3>
      <ul className="amenities-list">
        {amenitiesList.map(({name}, index) => {
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
      
      <h3>Tag Category</h3>
        <input
          type="checkbox"/>
      <label htmlFor={`custom-checkbox`}>{"Tag"}</label>
    </div>
  );
}
export default Amenities;

