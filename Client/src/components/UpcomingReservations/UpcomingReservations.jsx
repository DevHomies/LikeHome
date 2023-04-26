import React, { useState } from "react";
import EditReservations from "../EditReservations/EditReservations";
import './UpcomingReservations.css';


function UpcomingReservations(props) { 

    const [EditmodalOpen, setEditmodalOpen] = useState(false);
    const [CancelmodalOpen, setCancelmodalOpen] = useState(false);

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
                    </div>

                    

                </div>

            </div>

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
                    </div>

                    

                </div>

            </div>


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
                    </div>

                    

                </div>

            </div>

            
        </div>
    )
}

export default UpcomingReservations;