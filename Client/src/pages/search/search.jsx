import HotelPreview from "../../components/HotelPreview/HotelPreview.jsx";
import Sort from "../../components/Sort/sort.jsx";
import Amenities from "../../components/Amenities/Amenities.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./search.css";
import { useState, useEffect } from "react";
import { Footer } from '../../components';
import { useLocation } from "react-router-dom";

const amenitiesList = [
  {
    name: "Free Wi-Fi",
  },
  {
    name: "Gym",
  },
  {
    name: "Pool",
  },
  {
    name: "Pet friendly",
  },
  {
    name: "Hot tub",
  },
  {
    name: "Breakfast included",
  },
  {
    name: "Kitchen",
  },
  {
    name: "Air-conditioned",
  },
  {
    name: "Spa",
  },
  {
    name: "Restaurant",
  },
];

// ---------------------------------------------------
const sortByOptions = ["Recommended", "Price: $ - $$$", "Price: $$$ - $"];

function Search() {
  // Grabbing the data from the search component in the home page
  const { state } = useLocation();
  const [data, setData] = useState([]);
  
  const [sortBy, setSortBy] = useState("Recommended");
  const [minimum, setMinimum] = useState(null);
  const [maximum, setMaximum] = useState(null);
  const [displayHotels, setDisplayHotels] = useState([]);
  const [hotelCount, setHotelCount] = useState(0);
  const [filtersState, setFiltersState] = useState(
    amenitiesList.map((item) => {
      return [item.name, false];
    })
  );
  const [starsState, setStarsState] = useState([false,false,false,false,false]);

  // Update price range state
  function handleOnChangePrice(minimum, maximum) {
    if (minimum === "") setMinimum(null);
    else setMinimum(minimum);

    if (maximum === "") setMaximum(null);
    else setMaximum(maximum);
  }

  function handleOnChangeStars(position) {
    // Update only selected position
    const updatedStarsState = starsState.map((item, index) =>
      // If current element is selected position, then return the same element except with a switched boolean state
      // This is implemented as an array of item[0]-- the name of the star-- and !item[1]-- the switched version of the original boolean state
      index === position ? !item : item
    );

    setStarsState(updatedStarsState);
  }

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
    var tempHotels = hotels.reduce((result, hotel) => {
      // Do not include hotels that are outside of price range
      if (minimum != null && minimum > hotel.price) return result;
      if (maximum != null && hotel.price > maximum) return result;

      // Do not include hotels that do not have the star-rating
      let ratingSelected = false;  
      
      // Check if user has selected a rating
      for (let i = 0; i < starsState.length; i++) {
        if (starsState[i] === true) {
          ratingSelected = true;
          break;
        }
      }

      // If user has selected at least one rating, the hotel's rating must be selected for the hotel to be rendered
      if (ratingSelected) {
        if (starsState[hotel.rating-1] === false) {
          return result;
        }
      }

      // Do not include hotels that do not have selected filters
      for (const filter of filtersState) {
        if (filter[1] === true && !hotel.hotel_amenities.includes(filter[0])) {
          return result;
        }
      }
      result.push(hotel);

      return result;
    }, []);

    // Filter based
    switch (sortBy) {
      case "Price: $ - $$$":
        tempHotels = [...tempHotels].sort((a, b) => a.price - b.price);
        break;
      case "Price: $$$ - $":
        tempHotels = [...tempHotels].sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return tempHotels;
  }

  // Returns a list of react HotelPreview components
  function hotelPreviews() {
    var newHotels = filtersAndSortHotels(data); // Filter and sort hotels
    newHotels = newHotels.map((hotel, index) => {
      return (
        <div className="item" key={index}>
          <HotelPreview
            title={hotel.name}
            address={hotel.address}
            details={hotel.hotel_amenities.split(",")}
            price={hotel.price}
            img={"https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="}
            rating={hotel.rating}
            id={hotel.name.replace(/\s/g, "")}
            search={state}
            rooms={hotel.room_available}
          />
        </div>
      );
    });

    setHotelCount(newHotels.length); // Update counter for number of hotels
    return newHotels;
  }


  // Re-Render hotels if filters, sort, minimum/maximum price, or rating is changed
 // useEffect(() => {
  ////  setDisplayHotels(hotelPreviews());
 // }, [filtersState, sortBy, minimum, maximum, starsState]);
useEffect(() => {
  fetch('/catalog/hotelinfo/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
},[]);

// Re-Render hotels if filters, sort, minimum/maximum price, or rating is changed
useEffect(() => {
  setDisplayHotels(hotelPreviews());
}, [filtersState, sortBy, minimum, maximum, starsState, data]);

  return (
    <section>
      <Navbar />
      <div className="page">
        <div className="sort-section">
          <h1>{hotelCount} results shown in {state.location}</h1>
          <h2>
            <Sort
              sortBy={sortBy}
              handleSortBy={setSortBy}
              options={sortByOptions}
            />
          </h2>
        </div>

        <section className="layout">
          <div className="anemities-section">
            <div className="anemities">
              <Amenities
                items={amenitiesList}
                handleOnChangeFilters={handleOnChangeFilters}
                handleOnChangePrice={handleOnChangePrice}
                handleOnChangeStars={handleOnChangeStars}
              />
            </div>
            <div className="showAnemities"> Edit Filters </div>
          </div>

          <section className="hotel-grid">{
              displayHotels
          }</section>
        </section>
      </div>
      <Footer />
    </section>
  );
}

export default Search;
