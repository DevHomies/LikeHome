import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Footer, UpcomingReservations, 
    PastReservations, EditReservations } from '../../components'; 
import './CurrentReservations.css';

const CurrentReservations = () => { 

    return (
        <>
        <Navbar />
        
        <div className="ReservationsContainer">
            <div className="RewardStripContainer">
                <div className="RewardBox">
                    <p>YOU HAVE 3,000,000,000,000 REWARD POINTS AVAILABLE</p>
                </div>
            </div>

            <div className="BoxContainer">

                <div className="TopContainer">

                    <div className="AccountLinkPages">
                        <p><Link to='/account' className='AccountLinks'>Account</Link></p>
                        
                        <p><Link to='/UserReservations' className='AccountLinks'>Reservations</Link></p>
                    
                        <p><Link to='' className='AccountLinks'>Transaction History</Link></p>

                        <p><Link to='' className='AccountLinks'>Change Password</Link></p>
                    </div>

                    <div className="ReservContainer">
                        <div className="RLinks">
                            <p><Link to='' className='ReservationLinks'>Upcoming</Link></p>
                            <p><Link to='' className='ReservationLinks'>Past</Link></p>
                        </div>
                        <UpcomingReservations />
                        <PastReservations />
                    </div>
                    
                </div>

            </div>
        </div>

        <Footer />
        </>
    )

}

export default CurrentReservations;