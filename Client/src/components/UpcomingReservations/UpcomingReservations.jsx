import React from "react";
import './UpcomingReservations.css';


const UpcomingReservations = () => { 

    return (
    
            <div className="UpcomingRoomsContainer">
            <img style = {{ width: 120, height: 100 }} 
                src = '/assets/images/dummyRoom.png'
                id="Upcoming"/>

                <div className="UpcomingRoomInfo">
                    <p id="URRoomName">Hotel1</p>
                    <p id="URStayDates">Check In: 01/01/2100</p>
                    <p id="URStayDates"> Check Out: 01/02/2100</p>
                    <p id="URTravelersNum">Travelers: 4</p>
                </div>

                <div className="URBotContainer">
                    <div className="UREditButton">
                        <button type="button"> 
                            Edit Reservation
                        </button>
                    </div>
                    <div className="URCancelButton">
                        <button type="button"> 
                            Cancel Reservation
                        </button>
                    </div>

                </div>
            </div>
    )
}

export default UpcomingReservations;