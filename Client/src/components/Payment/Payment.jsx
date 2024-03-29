import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

import "./Payment.css";

// ----------------------------------

function Payment({ parentCallback }) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const nights = (state.search.checkDates[1].getTime() - state.search.checkDates[0].getTime()) / (1000 * 3600 * 24);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [rewardApplied, setRewardApplied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [reward, setReward] = useState([]); 
  const [rewardPoints, setRewardPoints] = useState(0);

  function hasEnoughRewardPoints() {
    if (rewardPoints >= 150) return true;
    return false;
  }

  useEffect(() => {
    fetch('/catalog/reward/')
        .then(response => response.json())
        .then(reward => setReward(reward))
        .catch(error => console.error(error));
  },[]);

  useEffect(() => {
    if (reward[0] !== undefined)
      setRewardPoints(reward[0].reward_points);
  },[reward])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      rewardApplied,
      state,
      nights,
    };
    try {
      const response = await axios.post('/catalog/reservation/', data);

    } catch (error) {
      console.error(error);
    }
    setSubmitted(true);
    parentCallback(true);
  };

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className={ submitted ? "payment-blur" : "" }>
      <div className="payment-layout">
        <div className="payment-left">
          <div className="pay-card">
            <h1 className="payment-title">1. Payment Details</h1>
            <hr />
            <form classname="pay-form" onSubmit={handleSubmit} id='payment-form'>
              <label htmlFor="name" className="pay-group">
                Name
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
              <h2> {state.title} </h2>
              <p> {state.address} </p>
              
              <div className="payment-personnel">
                <p>Travelers: {state.search.travelers}</p>
                <p>Rooms: {state.search.rooms}</p>
              </div>

              <div className="payment-dates">
                <p>
                  Checkin: {state.search.checkDates[0].toString()}
                </p>

                <p>
                  Checkout: {state.search.checkDates[1].toString()}
                </p>
              </div>
            </section>
            <hr />
            <section>
              {rewardApplied ? "" : <div></div>}
              <div> {rewardApplied ? "Reward Points Applied! FREE STAY " : ""}</div>
              <h3 className="payment-total">
                Total: ${ rewardApplied ? 0 : state.price * nights * state.search.rooms}
              </h3>

              <button classname="button" type="submit" form="payment-form">Pay Now</button>
              <button className="payment-cancel" onClick={goBack}>Cancel</button>
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
                  alt="hotel"
                ></img>
                <div className="payment-hotel-info">
                  <p> {state.title}</p>
                  <p> {state.address} </p>
                </div>
              </div>
            </section>
            <hr />
            <section>
              <i> Remaining reward points: {rewardApplied ? rewardPoints -  150 : rewardPoints}</i>
              <br/>
              <br/>
              <div className="payment-apply">
                <input disabled = {hasEnoughRewardPoints() ? false : true} className="payment-reward-checkbox" type="checkbox"
                onChange = {() => setRewardApplied(!rewardApplied)} id='apply-rewards'></input>
                <label className="payment-reward-text" htmlFor="apply-rewards">
                  {hasEnoughRewardPoints()
                    ? "Apply award Points"
                    : "You don't have enough reward points"}
                </label>
              </div>
            </section>
            <hr />
            <section className="final-summary">
              <div className="payment-subtotal">Subtotal: ${state.price * nights * state.search.rooms}</div>
              <div className="payment-subtotal-info">{nights} nights x ${state.price} x {state.search.rooms} rooms</div>
              {rewardApplied ? "" : <div></div>}
              <div> {rewardApplied ? "Reward Points Applied! FREE STAY " : ""}</div>
              <h3 className="payment-total">
                Total: ${ rewardApplied ? 0: state.price * nights * state.search.rooms}
              </h3>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
