import react from "react";
import HotelPreview from "../../components/HotelPreview/HotelPreview.jsx";
import Sort from "../../components/Sort/sort.jsx";
import Amenities from "../../components/Amenities/Amenities.jsx";
import Navbar  from "../../components/Navbar/Navbar.jsx";
import "./search.css";
import {useState, useEffect} from "react";


// Back-end people: 
// You'll probably only have to worry about the two consts here, amenitiesList and hotels.

// 1. This is the list of all possible amenities, which you could probably load in from DB.
const amenitiesList = [   
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
    name: "Air-conditioned"
  },
  {
    name: "Spa"
  },
  {
    name: "Restaurant"
  }
];

// 2. Hotels can also be loaded in from DB..
const hotels = [
  {title: "Marriot Hotel",
  address: "123 Marriot St.",
  details: ["Free Wi-Fi", "Pool", "Kitchen", "Spa", "Restaurants"],
  price: 100},
  {title: "Another Hotel",
  address: "123 Another St.",
  details: ["Free Wi-Fi", "Pool"],
  price: 230},
  {title: "Pee Hotel",
  address: "123 Peep St.",
  details: ["Free Wi-Fi", "Kitchen"],
  price: 100},
  {title: "Poop Hotel",
  address: "123 Poop St.",
  details: ["Free Wi-Fi", "Pool", "Kitchen"],
  price: 123}
];


const sortByOptions = [
    "Recommended",
    "Price: $ - $$$",
    "Price: $$$ - $"
]

function Search(props) {
  const [sortBy, setSortBy]= useState("Recommended");
  const [stayRange, setStayRange]= useState([1,3]);
  const [[minimum,maximum], setPrice]= useState([null,null]);
  const [displayHotels, setDisplayHotels] = useState([]);
  const [hotelCount, setHotelCount] = useState(0);
  const [filtersState, setFiltersState] = useState(amenitiesList.map(
    (item) => {
       return [item.name, false]}
      ));
    
    
  // Update state based on which filters are selected
  function handleOnChangeFilters(position) {

    // Update only selected position
    const updatedFiltersState = filtersState.map((item, index) =>
      // If current element is selected position, then return the same element except with a switched boolean state
      // This is implemented as an array of item[0]-- the name of the filter-- and !item[1]-- the switched version of the original boolean state
      index === position ? [item[0], !item[1]] : item
    );

    setFiltersState(updatedFiltersState);
  }
  
  function filtersAndSortHotels(hotels) {
        // Display only hotels that match filters
        var tempHotels = hotels.reduce(
          (result, hotel) => { 
    
            // Do not include hotels that are outside of price range
            if (minimum != null && minimum > hotel.price)
              return result;
            if (maximum != null && hotel.price > maximum)
              return result;
            
              // Do not include hotels that do not have selected filters
            for (const filter of filtersState) {
              
              if (filter[1] == true && !hotel.details.includes(filter[0])) {
                return result;
              };
            }
            result.push(hotel);
            
            return result;
          } , []);
    
          
          // Filter based
          switch(sortBy){
            case "Price: $ - $$$":
              tempHotels = [...tempHotels].sort((a, b) => a.price - b.price);
              break;
            case "Price: $$$ - $":
              tempHotels = [...tempHotels].sort((a, b) => b.price - a.price);
              break;
          }
          
          console.log("haii");

          return tempHotels;
  }

  // Returns a list of react HotelPreview components
  function hotelPreviews () {
      var newHotels = filtersAndSortHotels(hotels); // Filter and sort hotels
      newHotels = newHotels.map((hotel, index) => {
          return (
            <div className="item">
              <HotelPreview
                title = {hotel.title}
                address = {hotel.address}
                details={hotel.details}
                price = {hotel.price * (stayRange[1] - stayRange[0])}
              />
          </div>
          );
      });

      setHotelCount(newHotels.length);    // Update counter for number of hotels
      return newHotels;
  }
  // Render hotels based on filters

  useEffect(()=>{
    setDisplayHotels(hotelPreviews());
  }, [filtersState, sortBy])
  
  return (
    <section>
      <Navbar />
      <div className = "page">
  
        <div className = "sort-section"> 
          <h1 className = "sort-section-left"> {hotelCount} results shown in San Francisco, CA</h1>
          <h2 className = "sort-section-right"> <Sort sortBy = {sortBy} handleSortBy = {setSortBy} options = {sortByOptions} /> </h2>
        </div>
        <section className = "layout">
          <div className = "anemities-section">
            <div className = "anemities"> <Amenities items = {amenitiesList} handleOnChangeFilters = {handleOnChangeFilters}  /></div>
            <div className = "showAnemities">  Edit Filters </div>
          </div>
          <section className="hotel-grid">
          {displayHotels} 
          </section>
        </section>
      </div>
    </section>
  );
}

export default Search;
