import react from "react";
import HotelPreview from "../../components/HotelPreview/HotelPreview.jsx";
import Sort from "../../components/Sort/sort.jsx";
import Amenities from "../../components/Amenities/Amenities.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./search.css";
import { useState, useEffect } from "react";

// TO-DO:
// 1. Handle location
// 2. Decide what amenities you want
// 3. Handle hotel DB
// For now (before everything is integrated), everything mentioned above is handled with the test input below

// Functionality-wise
// 4. Amenities invalid input handling
// 5. Import michael's check/in/out + travlers/rooms components at the top

const location = "San Jose, CA";
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

const hotels = [
  {
    title: "Marriot Hotel",
    address: "123 Marriot St.",
    details: ["Free Wi-Fi", "Pool", "Kitchen", "Spa", "Restaurants"],
    price: 100,
    img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
  },
  {
    title: "Another Hotel",
    address: "123 Another St.",
    details: ["Free Wi-Fi", "Pool"],
    price: 230,
    img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
  },
  {
    title: "Pee Hotel",
    address: "123 Peep St.",
    details: ["Free Wi-Fi", "Kitchen"],
    price: 100,
    img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
  },
  {
    title: "Poop Hotel",
    address: "123 Poop St.",
    details: ["Free Wi-Fi", "Pool", "Kitchen"],
    price: 123,
    img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
  },
];

// ---------------------------------------------------
const sortByOptions = ["Recommended", "Price: $ - $$$", "Price: $$$ - $"];

function Search(props) {
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

  // Update price range state
  function handleOnChangePrice(minimum, maximum) {
    if (minimum == "") setMinimum(null);
    else setMinimum(minimum);

    if (maximum == "") setMaximum(null);
    else setMaximum(maximum);
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

      // Do not include hotels that do not have selected filters
      for (const filter of filtersState) {
        if (filter[1] == true && !hotel.details.includes(filter[0])) {
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
    }

    return tempHotels;
  }

  // Returns a list of react HotelPreview components
  function hotelPreviews() {
    var newHotels = filtersAndSortHotels(hotels); // Filter and sort hotels
    newHotels = newHotels.map((hotel, index) => {
      return (
        <div className="item">
          <HotelPreview
            title={hotel.title}
            address={hotel.address}
            details={hotel.details}
            price={hotel.price}
            img={hotel.img}
          />
        </div>
      );
    });

    setHotelCount(newHotels.length); // Update counter for number of hotels
    return newHotels;
  }
  // Render hotels based on filters

  useEffect(() => {
    setDisplayHotels(hotelPreviews());
  }, [filtersState, sortBy, minimum, maximum]);

  return (
    <section>
      <Navbar />
      <div className="page">
        <div className="sort-section">
          <h1 className="sort-section-left">
            {" "}
            {hotelCount} results shown in {location}
          </h1>
          <h2 className="sort-section-right">
            {" "}
            <Sort
              sortBy={sortBy}
              handleSortBy={setSortBy}
              options={sortByOptions}
            />{" "}
          </h2>
        </div>
        <section className="layout">
          <div className="anemities-section">
            <div className="anemities">
              {" "}
              <Amenities
                items={amenitiesList}
                handleOnChangeFilters={handleOnChangeFilters}
                handleOnChangePrice={handleOnChangePrice}
              />
            </div>
            <div className="showAnemities"> Edit Filters </div>
          </div>
          <section className="hotel-grid">{displayHotels}</section>
        </section>
      </div>
    </section>
  );
}

export default Search;
