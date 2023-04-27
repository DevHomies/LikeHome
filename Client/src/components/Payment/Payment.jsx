import React, { useState } from "react";

import "./Payment.css";

const hotels = [
  {
    title: "Marriot Hotel",
    address: "123 Marriot St. CA USA",
    details: ["Free Wi-Fi", "Pool", "Kitchen", "Spa", "Restaurants"],
    price: 150,
    img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    rating: 1,
  }
];


// This page requires at least the below variables ------

// Assuming these will be dates parsed into strings
const checkIn = "01/21/2023";
const checkOut = "01/23/2023";
const travelers = "4";

const hotel = hotels[0];

const nights = 3; // Depends on Date() range and should be mathematically calculated fromit

const rewardPoints = 150; // user's reward points, btw $1 = 1 reward point

// ----------------------------------


function Payment(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [rewardApplied, setRewardApplied] = useState(false);


  function hasEnoughRewardPoints() {
    if (rewardPoints >= hotel.price) return true;
    return false;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, cardNumber, expirationDate, cvc);
  };

  return (
    <div>
      <div className="payment-layout">
        <div className="payment-left">
          <div className="pay-card">
            <h1 className="payment-title">1. Payment Details</h1>
            <hr />
            <form classname="pay-form" onSubmit={handleSubmit}>
              <label htmlFor="name" className="pay-group">
                Name
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                />
              </label>

              <label htmlFor="email" className="pay-group">
                Email
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                />
              </label>

              <label htmlFor="cardNumber" className="pay-group">
                Card Number
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  autocomplete="cc-number" 
                  maxlength="16"
                  placeholder="1111 1111 1111 1111"
                />
              </label>

              <label htmlFor="expirationDate" className="pay-group">
                Expiration Date
                <input
                  type="text"
                  id="expirationDate"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  placeholder="02/45"
                />
              </label>

              <label htmlFor="cvc" className="pay-group">
                CVC
                <input
                  type="text"
                  id="cvc"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  placeholder="123"
                />
              </label>
            </form>
          </div>

          <div className="pay-review">
            <h1 className="payment-title">2. Review</h1>
            <section>
              <hr />
              
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <p>Card Number: {cardNumber}</p>
              <p>Expiration Date: {expirationDate}</p>
              <p>CVC: {cvc}</p>
              <hr/>
            </section>
            <section>
              <div className="payment-hotel-info-section">
                <img
                  className="payment-image"
                  src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
                ></img>
                <p className="payment-hotel-info"> {hotel.title} </p>
                <p className="payment-hotel-info"> {hotel.address} </p>
              </div>

              <div className="payment-reservation-info">
                <div className="payment-reservation-detail">
                  Checkin: {checkIn}
                </div>

                <div className="payment-reservation-detail">
                  Checkout: {checkOut}
                </div>
                <div className="payment-reservation-detail">
                  Travelers: {travelers}
                </div>
              </div>
            </section>
            <hr />
            <section>
              <p>Subtotal: ${hotel.price * nights}</p>
              {rewardApplied ? "" : <div></div>}
              <div> {rewardApplied ? "Reward points: -$" + hotel.price : ""}</div>
              <h3 className="payment-total">
                Total: ${ rewardApplied ? hotel.price * nights - hotel.price: hotel.price * nights}
              </h3>
              <br/>
              <button classname="button" type="submit">
                Pay Now
              </button>
            </section>
          </div>
          
        </div>
        <div className="payment-right">
          <div className="payment-preview">
            <h3 className="payment-text-element"> Summary </h3>
            <section>
              <div className="payment-hotel-info-section">
                <img
                  className="payment-image"
                  src="https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="
                ></img>
                <p className="payment-hotel-info"> {hotel.title}</p>
                <p className="payment-hotel-info"> {hotel.address} </p>
              </div>
            </section>
            <hr />
            <section>
              <i> Remaining reward points: {rewardApplied ? rewardPoints -  hotel.price: rewardPoints}</i>
              <br/>
              <br/>
              <input disabled = {hasEnoughRewardPoints() ? false : true} className="payment-reward-checkbox" type="checkbox"
              onChange = {() => setRewardApplied(!rewardApplied)}></input>
              <p className="payment-reward-text">
                {hasEnoughRewardPoints()
                  ? "Apply award Points"
                  : "You don't have enough reward points"}
              </p>
            </section>
            <hr />
            <section>
              <div className="payment-subtotal">Subtotal: ${hotel.price * nights}</div>
              <div className="payment-subtotal-info">{nights} nights x ${hotel.price}</div>
              {rewardApplied ? "" : <div></div>}
              <div> {rewardApplied ? "Reward points: -$" + hotel.price : ""}</div>
              <h3 className="payment-total">
                Total: ${ rewardApplied ? hotel.price * nights - hotel.price: hotel.price * nights}
              </h3>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
