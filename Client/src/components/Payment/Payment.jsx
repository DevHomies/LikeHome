import React, { useState } from "react";

import './Payment.css'

const Payment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, cardNumber, expirationDate, cvc);
  };

  return (
    <div>
      <div className ='pay-card'>
        <h1>1. Payment Details</h1>
        <hr />
        <form  classname='pay-form' onSubmit={handleSubmit}>
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

      <div className='pay-review'>
        <h1>2. Review</h1>
        <hr />
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Card Number: {cardNumber}</p>
        <p>Expiration Date: {expirationDate}</p>
        <p>CVC: {cvc}</p>
        <button classname='button' type="submit">Pay Now</button>
      </div>
    </div>
  );
};

export default Payment;