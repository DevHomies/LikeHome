import './cancelReserve.css';
import React from "react";
import { BsArrowRight} from 'react-icons/bs';
import { Navbar, Footer } from '../../components'; 
const CancelReserve = () => {
  return (

  <>
  <div className="nav-header">
          <h2>LIKEHOME</h2>
  </div>
    <div className= "box">
        

        <div className="cancel-box">

          <div className ="label">You are canceling a reservation for..</div>

          <div className='container'>
            <button type="submit" className='back-button'>Go Back</button>
            <button type="submit" className='cancel-button'>Cancel Reservation</button>
          </div>

          <div className='container1'>
            <div className="label1">Hotel1</div>
            <div className="label2">Check In : 01/01/2023</div>
            <div className="label3">Travelers: 4</div>
          </div>

          <div className="label4">Check Out : 01/02/2023</div>
          <div className="arrow"> <BsArrowRight size={82} color="lightgrey" className="custom-icon" /></div>

          <div className='container3'>
            <div className="label5">Original Sale: $100</div>
            <div className="label6">Cancellation Fee: -$20 (20%)</div>
            <div class="horizontal-line"></div>
            <div className="label7"><strong>Refund Amount: $80</strong></div>
          </div>
        </div>

        <div className="arrow-right"></div>
        <div className="image" style = {{ width: 200, height: 180 }}>
         


      
        </div>
        
    </div>
     <Footer/>
    </>
    
)
}

export default CancelReserve