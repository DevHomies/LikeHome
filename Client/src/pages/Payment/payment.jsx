import Navbar from "../../components/Navbar/Navbar.jsx";
import { useState, useEffect } from "react";
import "./payment.css";



function PaymentPage(props) {
    const [rewardApplied, setRewardApplied] = useState(false);

    function hasEnoughRewardPoints() {
        if (props.rewardPoints > 100) 
            return true;
        return false;
    }

    function applyRewardPoints() {
        if (hasEnoughRewardPoints())
            setRewardApplied(true)
    }

   return (
    <section>
      <Navbar />
      <div className="payment-page">
        <section className="payment-layout">
          <div className="payment-left">
            <div className="payment-details">
                <h1 className="payment-review"> 3. Review </h1>

                <div className="payment-hotel">                
                <div className="payment-breakContainer">
                    <hr className="payment-break"></hr>
                </div>
                    <div className="payment-hotel-details"></div>
                    <div className="payment-reservation-details"></div>
                </div>

                <div className="payment-pricing">
                    <div className="payment-breakContainer">
                        <hr className="payment-break"></hr>
                    </div>
                    <div>Subtotal: ${props.hotel.price * props.nights}</div>
                    <div>Reward Points: -${props.rewardPoints}</div>
                    <h3 className="payment-total">Total: ${props.hotel.price * props.nights - props.hotel.price} </h3>
                </div>
            </div>
          </div>
          <div className="payment-right">
          <div className="payment-preview">
            <h4> test </h4>
          </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default PaymentPage;
