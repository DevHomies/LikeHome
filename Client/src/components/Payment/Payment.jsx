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
     <div className ='card'>
      <h1 className='h1'>Payment Information</h1>
      <form  classname='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cvc">CVC</label>
          <input
            type="text"
            id="cvc"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
          />
        </div>
      </form>
     </div>
      <div className='review'>
        <h2>Review</h2>
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