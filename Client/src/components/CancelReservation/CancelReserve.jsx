import './cancelReserve.css';
import React from "react";
import { BsArrowRight} from 'react-icons/bs';

//Michael selfnote: 20% cancellation fee

function CancelReserve({setCancelmodalOpen, upcomingReservations, handleCancel}) {

  const handleCancelSubmit = () => {
    alert("Your reservation has been cancelled!");
    setCancelmodalOpen(false);
  }


  
  return upcomingReservations.map((upcReserves) => 
        <div className="cancel-box" id='cancelbox'>
          <h1 id='CRtitle'>You are canceling a reservation for..</h1>
          <div className="cancel-inner-box">
            <div className="cancel-image">
              <img 
                src={upcReserves.img}
                id='CancelImage'>
                </img>

            </div>

            <div className='container1'>
              <h2>{upcReserves.title}</h2>
              <h3>Check In: <span>{upcReserves.checkIn}</span> | Check Out: <span>{upcReserves.checkOut}</span></h3>
              <h3>Travelers: <span>{upcReserves.travelers}</span></h3>
            </div>

            <BsArrowRight size={82} color="lightgrey" className="arrow" />

            <div className='container2'>
              <h3 className="label5">Original Sale: {upcReserves.price}</h3>
              <h3 className="label6">Cancellation Fee: {upcReserves.price * 0.2} (20%)</h3>
              <hr />
              <h2 className="label7"><strong>Refund Amount: ${upcReserves.price - (upcReserves.price * 0.2)}</strong></h2>
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
            onClick={() => {handleCancel(upcReserves.id)}}>Cancel Reservation</button>
          </div>
        </div>
    
  );

}

export default CancelReserve;