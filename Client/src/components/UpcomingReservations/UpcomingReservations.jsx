import React, { useState, useEffect } from "react";
import EditReservations from "../EditReservations/EditReservations";
import CancelReserve from "../CancelReservation/CancelReserve";
import './UpcomingReservations.css';



function UpcomingReservations({ parentCallback }) { 

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
    const [upcomingReservations, setupcomingReservations] = useState([
        {
            id: 1,
            title: "Marriot Hotel",
            address: "123 Some Street",
            price: 100,
            checkIn:  "01/01/2100",
            checkOut:  "01/04/2100",  
            travelers: 5,
            rooms: 2,
            img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },        {
            id: 2,
            title: "Hotel Hotel",
            address: "321 West Ave",
            price: 200,
            checkIn:  "02/01/2100",
            checkOut:  "02/04/2100",  
            travelers: 2,
            rooms: 1,
            img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },        {
            id: 3,
            title: "Not a Hotel",
            address: "8713 South Rd",
            price: 300,
            checkIn:  "03/01/2100",
            checkOut:  "03/04/2100",  
            travelers: 4,
            rooms: 1,
            img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },   
        {
            id: 4,
            title: "Hotel",
            address: "1238 Another Street",
            price: 400,
            checkIn:  "04/01/2100",
            checkOut:  "04/04/2100",  
            travelers: 3,
            rooms: 5,
            img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },
    ]);

    //for editing reservations? 
    function updateReservations(id, newprice, newcheckIn, newcheckOut, newtravelers) {
        const updatedReservations = upcomingReservations.map((upcomingReserves) => {
            if (id === upcomingReserves.id) {
                return { ...upcomingReserves, checkIn: newcheckIn, 
                        checkOut:newcheckOut, travelers:newtravelers, price: newprice}
            }

            return upcomingReserves;
        });
        setupcomingReservations(updatedReservations);
        alert("Your new reservation changes have been implemented!");
        alert("New check in date: " + newcheckIn + " New check out date: " + newcheckOut +
            " New number of travelers: " + newtravelers );
        setEditmodalOpen(false);
    }

    //for cancelling reservations (sort of works)
    const handleCancel = (id) => {
        console.log(id);

        const newList = upcomingReservations.filter((upcReserves) => upcReserves.id !== id);
        setupcomingReservations(newList);
        alert("Your reservation has been cancelled!");
        setCancelmodalOpen(false);
    }

    //validate reservation date dupes here


    return (
        
        <div className="URSpanContainer">

            {upcomingReservations.map((upcReserves) => (
                <li className="URlist" key={upcReserves.id}>
                    <div className="UpcomingRoomsContainer">
                        <div className={ CancelmodalOpen || EditmodalOpen ? "payment-blur UpcomingImg" : "UpcomingImg"}>
                            <img 
                                src = {upcReserves.img}
                                id="Upcoming"
                                alt="upcoming"
                            />
                        </div>

                        <div className={ CancelmodalOpen || EditmodalOpen ? "payment-blur UpcomingRoomInfo" : "UpcomingRoomInfo"}>
                            <h1>{upcReserves.title} - ${upcReserves.price}</h1>
                            <p className="upc-address">{upcReserves.address}</p>
                            <p>Check In: {upcReserves.checkIn}</p>
                            <p className="upc-checkout">Check Out: {upcReserves.checkOut}</p>
                            <p>Travelers: {upcReserves.travelers}</p>
                            <p>Rooms: {upcReserves.rooms}</p>
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