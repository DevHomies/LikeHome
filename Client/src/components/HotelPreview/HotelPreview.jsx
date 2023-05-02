import "./HotelPreview.css";
import "../../index.css";
import { FaStar, FaDoorOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';

function HotelPreview(props) {
  const details = props.details.map((detail, index) => {
    return <li className="detail" key={index}>{detail}</li>;
  });

  return (
    <div>
      <Link className="preview-link" to={'/detail/' + props.id} state={props}>
        <div className="container">
          <img
            className="preview"
            src= {props.img}
            alt="text"
          ></img>
          <div className="info">
            <div className="rooms">{props.rooms} <FaDoorOpen/></div>
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
      </Link>
    </div>
  );
}

export default HotelPreview;
