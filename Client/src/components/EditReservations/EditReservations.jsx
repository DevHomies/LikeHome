import React from "react";
import { useState } from "react";
import './EditReservations.css';
import { Travelers } from '../../components';

function EditReservations ({setEditmodalOpen}) { 

    return (
            <div className="EditReservationsPopupContainer">
                <h1 id="ERtitle">Edit Reservations for. . .</h1>

                <div className="EditRoomContainer">
                    <img style = {{ width: 200, height: 180 }} 
                        id="ERimg"
                        src = '/assets/images/dummyRoom.png'/>

                    <div className="RoomInfo">
                        <p id="RoomName">Hotel1</p>
                        <p id="StayDates">Check In: 01/01/2100</p>
                        <p id="StayDates"> Check Out: 01/02/2100</p>

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
                        <button type="button" id="SaveChangesButton"> 
                            Save Changes
                        </button>
                    </div>

                </div>
            </div>
    )

}

export default EditReservations;