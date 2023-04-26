import React, { useState } from "react"
import './PastReservations.css';


function PastReservations() { 

    return (
    
        <div className="PRSpanContainer">

            <div className="PastReservationsContainer">
                <div className="PastImg">
                    <img style = {{ width: 120, height: 100 }} 
                        src = '/assets/images/dummyRoom.png'
                        id="Past"
                alt="dummy img"
            />
                </div>

                <div className="PastRoomInfo">
                    <p id="PRoomName">Hotel1</p>
                    <p id="PStayDates">Check In: 01/01/2100</p>
                    <p id="PStayDates"> Check Out: 01/02/2100</p>
                    <p id="PTravelersNum">Travelers: 4</p>
                </div>
            </div>

        </div>
    )
}

export default PastReservations;