import './cancelReserve.css';
import React from "react";
import { BsArrowRight} from 'react-icons/bs';

//Michael selfnote: 20% cancellation fee

function CancelReserve({setCancelmodalOpen}) {

  const handleNewChangeSubmit = () => {
    alert("Your reservation has been cancelled!");
    setCancelmodalOpen(false);
  }
  return (
        <div className="cancel-box">
          <h1 id='CRtitle'>You are canceling a reservation for..</h1>
          <div className="cancel-inner-box">
            <div className="cancel-image"></div>

            <div className='container1'>
              <h2>Hotel1</h2>
              <h3>Check In: <span>01/01/2023</span> | Check Out: <span>01/02/2023</span></h3>
              <h3>Travelers: <span>4</span></h3>
            </div>

            <BsArrowRight size={82} color="lightgrey" className="arrow" />

            <div className='container2'>
              <h3 className="label5">Original Sale: $100</h3>
              <h3 className="label6">Cancellation Fee: -$20 (20%)</h3>
              <hr />
              <h2 className="label7"><strong>Refund Amount: $80</strong></h2>
            </div>
          </div>

          <div className='container3'>
            <button type="button" 
              className='back-button'
              id='CRback'
              onClick={() => {setCancelmodalOpen(false)}}>Go Back</button>
            <button type="submit" 
            className='cancel-button'
            id='CRcancel'
            onClick={handleNewChangeSubmit}>Cancel Reservation</button>
          </div>
        </div>
    
)
}

export default CancelReserve;