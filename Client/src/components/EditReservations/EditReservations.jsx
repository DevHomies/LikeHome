import React from "react";
import { useState } from "react";
import './EditReservations.css';
import { BsArrowRight} from 'react-icons/bs';

function EditReservations ({setEditmodalOpen, upcSelected, updateReservations}) {

    const [editcheckin, seteditcheckin] = useState(upcSelected.checkIn);
    const [editcheckout, seteditcheckout] = useState(upcSelected.checkOut);
    const [editprice, seteditprice] = useState(upcSelected.price);
    const [edittravelers, setedittravelers] = useState(upcSelected.travelers);

    const [showError, setShowError] = useState(false);

    const handleSubmit = (e) => {
        if (editcheckin === "" || editcheckout === "" || edittravelers === "") {
            setShowError(true);
        }
    } 

    return (
            <div className="EditReservationsPopupContainer">
                <h1 id="ERtitle">Edit Reservations for..</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    }}>
                <div className="EditRoomContainer">
                    <div className="cancel-image">
                        <img style = {{ width: 250, height: 200 }} 
                            id="ERimg"
                            src={upcSelected.img}
                            alt="something"
                        />
                    </div>

                        <div className="RoomInfo">
                            <h2 id="RoomName">{upcSelected.title}</h2>
                            <h3 id="StayDates">
                                New check in date? : 
                                <input 
                                id="ERstaydates" 
                                type="text"
                                maxLength={10}
                                value={editcheckin}
                                placeholder={upcSelected.checkIn}
                                onChange={(e) => {
                                    seteditcheckin(e.target.value);}}/>
                            </h3>
                            <h3 id="StayDates">
                                New check out date? :
                                <input 
                                id="ERstaydates" 
                                type="text"
                                maxLength={10}
                                value={editcheckout}
                                placeholder={upcSelected.checkOut}
                                onChange={(e) => {
                                    seteditcheckout(e.target.value);}}/>
                                </h3>
                            <h3 id="newtrav">
                                New number of travelers? : 
                                <input
                                id="ERtravelers" 
                                type="text"
                                maxLength={1}
                                value={edittravelers}
                                placeholder={upcSelected.travelers}
                                onChange={(e) => {
                                    setedittravelers(e.target.value);
                                    seteditprice((upcSelected.price * 1.25))
                                    }}/>
                            </h3>
                        </div>
                    

                        <BsArrowRight size={82} color="lightgrey" className="arrow" />

                        <div className='ERnewprice' id="ER">
                            <h3 >Original Sale: ${upcSelected.price}</h3>
                            <h3 >Reservation Edit Fee: ${upcSelected.price * 0.25} (25%)</h3>
                            <hr />
                            <h2 >New Amount: ${(upcSelected.price * 1.25)}
                                </h2>
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
                        <button type="button" 
                        id="SaveChangesButton"
                        onClick={() => 
                        {updateReservations(upcSelected.id, editprice, editcheckin, editcheckout, edittravelers)}
                        }> 
                            Save Changes
                        </button>
                    </div>
                </div>
                </form>
            </div>
    )

}

export default EditReservations;