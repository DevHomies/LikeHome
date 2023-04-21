import React from "react";
import './EditReservations.css';
import { Travelers } from '../../components';

const EditReservations = () => { 

    return (
        <div className="ERbackground">
            <div className="EditReservationsPopupContainer">
                <h1>Edit Reservations for. . .</h1>

                <div className="EditRoomContainer">
                    <img style = {{ width: 200, height: 180 }} 
                        src = '/assets/images/dummyRoom.png'
                        alt = "test"
                    />

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
                        <button type="button"> 
                            Cancel
                        </button>
                    </div>
                    <div className="ERSaveChangesButton">
                        <button type="button"> 
                            Save Changes
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default EditReservations;