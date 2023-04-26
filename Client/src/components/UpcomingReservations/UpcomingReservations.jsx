import React, { useState } from "react";
import EditReservations from "../EditReservations/EditReservations";
import CancelReserve from "../CancelReservation/CancelReserve";
import './UpcomingReservations.css';


function UpcomingReservations(props) { 

    const [EditmodalOpen, setEditmodalOpen] = useState(false);
    const [CancelmodalOpen, setCancelmodalOpen] = useState(false);

    const reservations = [
        {
          title: "Marriot Hotel",
          price: 100,
          checkIn:  "01/01/2100",
          checkOut:  "01/04/2100",  
          travelers: 4,
          img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },
        {
          title: "Another Hotel",
          price: 230,
          checkIn:  "02/01/2100",
          checkOut:  "02/04/2100",  
          travelers: 1,
          img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },
        {
          title: "Pee Hotel",
          price: 100,
          checkIn:  "03/01/2100",
          checkOut:  "03/04/2100",  
          travelers: 2,
          img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },
        {
          title: "Poop Hotel",
          price: 123,
          checkIn:  "04/01/2100",
          checkOut:  "04/04/2100",  
          travelers: 5,
          img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },
      ];


    return (
        
        <div className="URSpanContainer">

            <div className="UpcomingRoomsContainer">
                <div className="UpcomingImg">
                    <img style = {{ width: 120, height: 100 }} 
                        src = '/assets/images/dummyRoom.png'
                        id="Upcoming"/>
                </div>

                <div className="UpcomingRoomInfo">
                    <p id="URRoomName">Hotel1</p>
                    <p id="URStayDates">Check In: 01/01/2100</p>
                    <p id="URStayDates"> Check Out: 01/02/2100</p>
                    <p id="URTravelersNum">Travelers: 4</p>
                </div>

                <div className="UREditContainer">
                    <div className="UREditButton">
                        <button type="button" 
                            onClick={() => {
                                setEditmodalOpen(true);
                            }}
                        > 
                            Edit Reservation
                        </button>
                        {EditmodalOpen && <EditReservations setEditmodalOpen={setEditmodalOpen} />}
                    </div>

                    <div className="URCancelButton">
                        <button type="button" 
                            onClick={() => {
                                setCancelmodalOpen(true);
                            }}
                        > 
                            Cancel Reservation
                        </button>
                        {CancelmodalOpen && <CancelReserve setCancelmodalOpen={setCancelmodalOpen} />}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default UpcomingReservations;