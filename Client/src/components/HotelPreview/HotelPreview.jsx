import "./HotelPreview.css";
import "../../index.css";

function HotelPreview(props) {
  // Clicking on a hotel preview redirects user to corresponding hotel page
  function handleClick() {
    console.log(props.title);
    // TO-DO: Redirect to corresponding page
  }

  const details = props.details.map((detail, index) => {
    return <li className="detail">{detail}</li>;
  });

  return (
    <div>
      <div className="container" onClick={() => handleClick()}>
        <img
          className="preview"
          src= {props.img}
        ></img>
        <div className="info">
          <h4 className="title">{props.title}</h4>
          <div className="price"> ${props.price} </div>
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
