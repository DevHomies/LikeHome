import React, { useState, createContext, useEffect } from "react";
import EditReservations from "../EditReservations/EditReservations";
import CancelReserve from "../CancelReservation/CancelReserve";
import './UpcomingReservations.css';



function UpcomingReservations() { 

    //opening popup tops for editing reservations and cancelling reservations respectively
    const [EditmodalOpen, setEditmodalOpen] = useState(false);
    const [CancelmodalOpen, setCancelmodalOpen] = useState(false);

    //using albany's test inputs with new elements
    const [upcomingReservations, setupcomingReservations] = useState([
        {
            id: 1,
            title: "Marriot Hotel",
            price: 100,
            checkIn:  "01/01/2100",
            checkOut:  "01/04/2100",  
            travelers: 5,
            img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },        {
            id: 2,
            title: "Hotel Hotel",
            price: 200,
            checkIn:  "02/01/2100",
            checkOut:  "02/04/2100",  
            travelers: 2,
            img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },        {
            id: 3,
            title: "Not a Hotel",
            price: 300,
            checkIn:  "03/01/2100",
            checkOut:  "03/04/2100",  
            travelers: 4,
            img: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
        },   
        {
            id: 4,
            title: "Hotel",
            price: 400,
            checkIn:  "04/01/2100",
            checkOut:  "04/04/2100",  
            travelers: 3,
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

    //don't know if it will work with others' implementations??
    function addNewReservations(id, title, price, checkIn, checkOut, travelers, img) {
        const newReservations = {
            id: id,
            title: title,
            price: price,
            checkIn: checkIn,
            checkOut: checkOut,
            travelers: travelers,
            img: img,
        }
        setupcomingReservations([...upcomingReservations, newReservations]);
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
                <li className="URlist"
                    key={upcReserves.id}>

                <div className="UpcomingRoomsContainer">
                    <div className="UpcomingImg">
                        <img style = {{ width: 120, height: 100 }} 
                            src = {upcReserves.img}
                            id="Upcoming"/>
                    </div>

                    <div className="UpcomingRoomInfo">
                        <p id="URRoomName">{upcReserves.title}</p>
                        <p id="URRoomPrice">${upcReserves.price}</p>
                        <p id="URStayDates">Check In: {upcReserves.checkIn} | Check Out: {upcReserves.checkOut}</p>
                        <p id="URTravelersNum">Travelers: {upcReserves.travelers}</p>
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
                            {EditmodalOpen && 
                                <EditReservations 
                                setEditmodalOpen={setEditmodalOpen} 
                                upcomingReservations={upcomingReservations}
                                updateReservations={updateReservations}/>}
                        </div>

                        <div className="URCancelButton">
                            <button type="button" 
                                onClick={() => {
                                    setCancelmodalOpen(true);
                                }}> 
                                Cancel Reservation
                            </button>
                            {CancelmodalOpen && 
                                <CancelReserve 
                                setCancelmodalOpen={setCancelmodalOpen}
                                upcomingReservations={upcomingReservations}
                                setupcomingReservations={setupcomingReservations}
                                handleCancel={handleCancel}/>}
                        </div>

                    </div>

                </div>
                </li>
            ))}
        </div>
    )
}

export default UpcomingReservations;