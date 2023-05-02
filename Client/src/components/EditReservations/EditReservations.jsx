import React from "react";
import { useState, useEffect } from "react";
import './EditReservations.css';
import { BsArrowRight} from 'react-icons/bs';
import axios from 'axios';


function EditReservations ({setEditmodalOpen, upcSelected, updateReservations}) {

    const [editcheckin, seteditcheckin] = useState(upcSelected.checkIn);
    const [editcheckout, seteditcheckout] = useState(upcSelected.checkOut);
    const [editprice, seteditprice] = useState(upcSelected.price);
    const [newprice, setNewprice] = useState(0);
    const [edittravelers, setedittravelers] = useState(upcSelected.travelers);
    const [editrooms, seteditrooms] = useState(upcSelected.num_of_rooms)

    const [showError, setShowError] = useState(false);

    const handleSubmit = async (e) => {
        if (editrooms === "" || edittravelers === "") {
            setShowError(true);
        }else {
            const dataedit = {
                upcSelected,
                edittravelers,
                editrooms,
            };
            try {
                const response = await axios.post('/catalog/edit/', dataedit);
                console.log("i am here: ", response)
                updateReservations(response.data);
              } catch (error) {
                console.error(error);
              }
        }

    }

    useEffect(() => {
        const firstDay = upcSelected.check_in.slice(-2);
        const secondDay = upcSelected.check_out.slice(-2);
        const nights = parseInt(secondDay) - parseInt(firstDay);
        const o_price = upcSelected.total / nights / upcSelected.num_of_rooms;
        setNewprice(nights * editrooms * o_price);
    }, [editrooms])

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
                            src={"https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="}
                            alt="something"
                        />
                    </div>

                        <div className="RoomInfo">
                            <h2 id="RoomName">{upcSelected.name}</h2>
                            <h3 id="StayDates">
                                New rooms ? :
                                <input 
                                id="ERstaydates" 
                                type="text"
                                maxLength={10}
                                value={editrooms}
                                placeholder={upcSelected.rooms}
                                onChange={(e) => {
                                    seteditrooms(e.target.value);
                                }}/>
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
                                }}/>
                            </h3>
                        </div>
                    

                        <BsArrowRight size={82} color="lightgrey" className="arrow" />

                        <div className='ERnewprice' id="ER">
                            <h3 >Original Sale: ${upcSelected.total}</h3>
                            <hr />
                            <h2 >New Amount: ${newprice}
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
                        {handleSubmit()}
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