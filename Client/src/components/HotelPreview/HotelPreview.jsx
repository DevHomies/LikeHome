import "./HotelPreview.css";
import "../../index.css";
import { FaStar } from "react-icons/fa";

function HotelPreview(props) {
  // Clicking on a hotel preview redirects user to corresponding hotel page
  function handleClick() {
    console.log(props.title);
    // TO-DO: Redirect to corresponding page
  }

  const details = props.details.map((detail, index) => {
    return <li className="detail" key={index}>{detail}</li>;
  });

  return (
    <div>
      <div className="container" onClick={() => handleClick()}>
        <img
          className="preview"
          src= {props.img}
          alt="text"
        ></img>
        <div className="info">
          <div className="rating">{props.rating} <FaStar/></div>
          <div className="price"> 
            <h4>{props.title}</h4>
            <p>${props.price}</p>
          </div>
          <h6 className="address">{props.address}</h6>
          <div className="breakContainer">
            <hr className="break"></hr>
          </div>
          <ul className="details">{details}</ul>
        </div>
      </div>
    </div>
  );
}

export default HotelPreview;
