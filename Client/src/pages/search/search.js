import react from "react";
import HotelPreview from "../../components/HotelPreview/HotelPreview.jsx";
import Sort from "../../components/Sort/sort.jsx"
import "./search.css";
import {useState} from "react";

const Checkbox = (props) => {
  return (
    <div>
      <input type="checkbox" /> {props.name}
    </div>
  );
};

const Category = (props) => {
  
}


function Search(props) {
  const [sortBy, setSortBy]= useState("Recommended");


  const temp = [
    "Free Wi-Fi",
    "Free parking",
    "Friendly people",
    "Pool",
    "Fkfoesk",
  ];
  const tags1 = ["Free Wi-Fi", "Free parking"];

  return (
    <section>
      <div className = "page">
      <Navbar />
        <div className = "sort-section"> 
          <h1 className = "sort-section-child"> 123 results shown in San Francisco, CA</h1>
          <h2 className = "sort-section-child"> <Sort sortBy = {sortBy} handleSortBy = {setSortBy} /> </h2>
        </div>
        <section className = "layout">
          <div> sidebar</div>
          <section className="hotel-grid">
            <div className = "item">
              <HotelPreview
                title="Marriot Hotel"
                address="123 Washington Square, 94566"
                details={temp}
              />
            </div>
            <div className = "item">
              <HotelPreview
                title="Marriot Hotel"
                address="123 Washington Square, 94566"
                details={temp}
              />
            </div>
            <div className = "item">
              <HotelPreview
                title="Marriot Hotel"
                address="123 Washington Square, 94566"
                details={temp}
              />
            </div>
            <div className = "item">
              <HotelPreview
                title="Marriot Hotel"
                address="123 Washington Square, 94566"
                details={temp}
              />
            </div>
            <div className = "item">
              <HotelPreview
                title="Marriot Hotel"
                address="123 Washington Square, 94566"
                details={temp}
              />
            </div>
            <div className = "item">
              <HotelPreview
                title="Marriot Hotel"
                address="123 Washington Square, 94566"
                details={temp}
              />
            </div>
          
          </section>
        </section>
      </div>
    </section>
  );
}

export default Search;
