import React, { useState } from "react"
import './PastReservations.css';


function PastReservations() { 

    const pastReservations = [
        {
          title: "Marriot Hotel",
          price: 100,
          checkIn:  "01/01/2023",
          checkOut:  "01/04/2023",  
          travelers: 4,
          img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },
        {
          title: "Another Hotel",
          price: 230,
          checkIn:  "02/01/2023",
          checkOut:  "02/04/2023",  
          travelers: 1,
          img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },
        {
          title: "Pee Hotel",
          price: 100,
          checkIn:  "03/01/2023",
          checkOut:  "03/04/2023",  
          travelers: 2,
          img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },
        {
          title: "Poop Hotel",
          price: 123,
          checkIn:  "04/01/2023",
          checkOut:  "04/04/2023",  
          travelers: 5,
          img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },
      ];



    return (
    
        <div className="PRSpanContainer">

            {pastReservations.map((pastReserves) => (
            
                <div className="PastReservationsContainer">
                    <div className="PastImg">
                        <img 
                          src = {pastReserves.img}
                          id="Past"
                          alt="past"
                        />
                    </div>

                    <div className="PastRoomInfo">
                      <h1>{pastReserves.title} - ${pastReserves.price}</h1>
                      <p className="past-address">123 Some Street, San Jose</p>
                      <p>Check In: {pastReserves.checkIn}</p>
                      <p className="past-checkout">Check Out: {pastReserves.checkOut}</p>
                      <p>Travelers: {pastReserves.travelers}</p>
                      <p>Rooms: 5</p>
                    </div>
                </div>

            ))}

        </div>
    )
}

export default PastReservations;