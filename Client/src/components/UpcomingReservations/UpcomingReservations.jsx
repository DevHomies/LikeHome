import React, { useState, useEffect } from "react";
import EditReservations from "../EditReservations/EditReservations";
import CancelReserve from "../CancelReservation/CancelReserve";
import './UpcomingReservations.css';
import axios from 'axios';




function UpcomingReservations({ data1, parentCallback }) { 

    //opening popup tops for editing reservations and cancelling reservations respectively
    const [EditmodalOpen, setEditmodalOpen] = useState(false);
    const [CancelmodalOpen, setCancelmodalOpen] = useState(false);
    const [clickedId, setClickedId] = useState(0);

    useEffect(() => {
        parentCallback(EditmodalOpen);
    }, [EditmodalOpen])

    useEffect(() => {
        parentCallback(CancelmodalOpen);
    }, [CancelmodalOpen])

    //using albany's test inputs with new elements
    const [upcomingReservations, setupcomingReservations] = useState([]);

    useEffect(() => {
        if (data1.length !== 0) setupcomingReservations(data1);
    }, [data1])

    console.log("i am here: ", data1);
    //for editing reservations? 
    function updateReservations(e) {
        setupcomingReservations(e);
        alert("Your new reservation changes have been implemented!");
        setEditmodalOpen(false);
    }

    //for cancelling reservations (sort of works)
    const handleCancel = async (id) => {
        // console.log(id);
        const current = data1.filter((upcReserves) => upcReserves.id === id);

        try {
            const response = await axios.post('/catalog/currentreservation/', current);
            setupcomingReservations(response.data);

          } catch (error) {
            console.error(error);
          }
        // const newList = upcomingReservations.filter((upcReserves) => upcReserves.id !== id);
        // setupcomingReservations(newList);
        alert("Your reservation has been cancelled!");
        setCancelmodalOpen(false);
    }

    return (
        
        <div className="URSpanContainer">

            {upcomingReservations.map((upcReserves) => (
                <li className="URlist" key={upcReserves.id}>
                    <div className="UpcomingRoomsContainer">
                        <div className={ CancelmodalOpen || EditmodalOpen ? "payment-blur UpcomingImg" : "UpcomingImg"}>
                            <img 
                                src = {"https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="}
                                id="Upcoming"
                                alt="upcoming"
                            />
                        </div>

                        <div className={ CancelmodalOpen || EditmodalOpen ? "payment-blur UpcomingRoomInfo" : "UpcomingRoomInfo"}>
                            <h1>{upcReserves.name} - ${upcReserves.total}</h1>
                            <p className="upc-address">Payment Date: {String(upcReserves.payment_date).slice(0, 10)}</p>
                            <p>Check In: {upcReserves.check_in}</p>
                            <p className="upc-checkout">Check Out: {upcReserves.check_out}</p>
                            <p>Travelers: {upcReserves.travelers}</p>
                            <p>Rooms: {upcReserves.num_of_rooms}</p>
                        </div>

                        <div className="UREditContainer">
                            <div className="UREditButton">
                                <button type="button" onClick={() => { setEditmodalOpen(true); setClickedId(upcReserves.id); }}
                                    className={ CancelmodalOpen || EditmodalOpen ? "payment-blur" : ""}
                                > 
                                    Edit Reservation
                                </button>
                                {EditmodalOpen && clickedId === upcReserves.id &&
                                    <EditReservations 
                                    setEditmodalOpen={setEditmodalOpen} 
                                    upcSelected={upcReserves}
                                    updateReservations={updateReservations}/>}
                            </div>

                            <div className="URCancelButton">
                                <button type="button" onClick={() => { setCancelmodalOpen(true); setClickedId(upcReserves.id); }}
                                    className={ CancelmodalOpen || EditmodalOpen ? "payment-blur" : ""}
                                > 
                                    Cancel Reservation
                                </button>
                                {CancelmodalOpen && clickedId === upcReserves.id &&
                                    <CancelReserve 
                                        setCancelmodalOpen={setCancelmodalOpen}
                                        upcSelected={upcReserves}
                                        handleCancel={handleCancel}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default UpcomingReservations;