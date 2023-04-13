// import React, {useState, useEffect}from "react";
// import { Navbar } from '../../components';
import './cancelReserve.css';
import React from "react"
const CancelReserve = () => {
  return (
    <div>
        <div className="nav-header">
          <h2>LIKEHOME</h2>
        </div>

        <div className="cancel-box">

          <div className ="label">You are canceling a reservation for..</div>

          <div className='container'>
            <button type="submit" className='back-button'>Go Back</button>
            <button type="submit" className='cancel-button'>Cancel Reservation</button>
          </div>

          <div className='container1'>
            <div className="label1">Hotel1</div>
            <div className="label2">Check In : 01/01/2023</div>
            <div className="label3">Travelers: </div>
          </div>

          <div className="label4">Check Out : 01/02/2023</div>

          <div className='container3'>
            <div className="label5">Original Sale: $100</div>
            <div className="label6">Cancellation Fee: -$20 (20%)</div>
            <div class="horizontal-line"></div>
            <div className="label7"><strong>Refund Amount: $80</strong></div>
          </div>
        </div>

        <div className="image"></div>
        <div className="arrow-right"></div>
        <div className="image-container"></div>
        
    </div>
)
}

export default CancelReserve