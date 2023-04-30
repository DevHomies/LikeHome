import './cancelReserve.css';
import React from "react";
import { BsArrowRight} from 'react-icons/bs';

//Michael selfnote: 20% cancellation fee

function CancelReserve({setCancelmodalOpen, upcSelected, handleCancel}) {


  //oh 
  return (
    <div className="cancel-box" id='cancelbox'>
      <h1 id='CRtitle'>You are canceling a reservation for..</h1>
      <div className="cancel-inner-box">
        <div className="cancel-image">
          <img 
            src={upcSelected.img}
            id='CancelImage'
            alt="cancel"
          />

        </div>

        <div className='container1'>
          <h2>{upcSelected.title}</h2>
          <h3>Check In: <span>{upcSelected.checkIn}</span> | Check Out: <span>{upcSelected.checkOut}</span></h3>
          <h3>Travelers: <span>{upcSelected.travelers}</span></h3>
        </div>

        <BsArrowRight size={82} color="lightgrey" className="arrow" />

        <div className='container2'>
          <h3 className="label5">Original Sale: ${upcSelected.price}</h3>
          <h3 className="label6">Cancellation Fee: ${upcSelected.price * 0.2} (20%)</h3>
          <hr />
          <h2 className="label7"><strong>Refund Amount: ${upcSelected.price - (upcSelected.price * 0.2)}</strong></h2>
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
        onClick={() => {handleCancel(upcSelected.id)}}>Cancel Reservation</button>
      </div>
    </div>
  );

}

export default CancelReserve;