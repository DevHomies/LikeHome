import React from "react";
import { useState } from "react";
import './EditReservations.css';
import { Travelers } from '../../components';

function EditReservations ({setEditmodalOpen, upcomingReservations}) {

        //todo :( 
    function handleTravelersChange(travelers) {

    }

    function handleStayDatesChange(checkIn, checkOut) {

    }

    const handleNewChangeSubmit = () => {
        alert("Your new reservation changes have been implemented!");
        setEditmodalOpen(false);
    }

    return upcomingReservations.map((upcReserves) => 
            <div className="EditReservationsPopupContainer">
                <h1 id="ERtitle">Edit Reservations for. . .</h1>

                <div className="EditRoomContainer">
                    <img style = {{ width: 200, height: 180 }} 
                        id="ERimg"
                        src={upcReserves.img}/>

                    <div className="RoomInfo">
                        <p id="RoomName">{upcReserves.title}</p>
                        <p id="StayDates">Check In: {upcReserves.checkIn} | Check Out: {upcReserves.checkOut}</p>

                        <div class="TravelersContainer">
                            <Travelers /> 
                        </div>
                    </div>
                </div>
                <div className="BottomContainer">
                    <div className="ERCancelButton">
                        <button type="button" id="CancelButton"
                            onClick={() => {setEditmodalOpen(false)}}> 
                            Cancel
                        </button>
                    </div>
                    <div className="ERSaveChangesButton">
                        <button type="button" id="SaveChangesButton"
                            onClick={handleNewChangeSubmit}> 
                            Save Changes
                        </button>
                    </div>

                </div>
            </div>
    )

}

export default EditReservations;