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
            src={"https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="}
            id='CancelImage'
            alt="cancel"
          />

        </div>

        <div className='container1'>
          <h2>{upcSelected.name}</h2>
          <h3>Check In: <span>{upcSelected.check_in}</span> | Check Out: <span>{upcSelected.check_out}</span></h3>
          <h3>Travelers: <span>{upcSelected.travelers}</span></h3>
          <h3>Rooms: <span>{upcSelected.num_of_rooms}</span></h3>
        </div>

        <BsArrowRight size={82} color="lightgrey" className="arrow" />

        <div className='container2'>
          <h3 className="label5">Original Sale: ${upcSelected.total}</h3>
          <h3 className="label6">Cancellation Fee: ${upcSelected.total * 0.2} (20%)</h3>
          <hr />
          <h2 className="label7"><strong>Refund Amount: ${upcSelected.total - (upcSelected.total * 0.2)}</strong></h2>
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