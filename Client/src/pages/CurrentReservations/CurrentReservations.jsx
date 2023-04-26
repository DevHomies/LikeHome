import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Footer, UpcomingReservations, 
    PastReservations } from '../../components'; 
import './CurrentReservations.css';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function CurrentReservations() { 

    return (
        <>
        <Navbar />
        <div className="ReservationsContainer">
            <div className="RewardStripContainer">
                <div className="RewardBox">
                    <p>YOU HAVE 3,000,000,000,000 REWARD POINTS AVAILABLE</p>
                </div>
            </div>

            <div className="BoxContainerCR">

                <div className="TopContainerCR">

                    <div className="AccountLinkPages" >
                        <p><Link to='/account' className='AccountLinks'>Account</Link></p>
                        
                        <p><Link to='/UserReservations' className='AccountLinks'>Reservations</Link></p>
                        
                        <p><Link to='/Login' className='AccountLinks'>Log Out</Link></p>
                    </div>

                    <div className="ReservationtabsContainer">
                        <Tabs className="tabsContainer">
                            
                            <TabList>
                            <Tab><p id="Rtabs">Upcoming</p></Tab>
                            <Tab><p id="Rtabs">Past</p></Tab>
                            </TabList>

                            <TabPanel>  
                                <UpcomingReservations />
                            </TabPanel>

                            <TabPanel>
                                <PastReservations />
                            </TabPanel>
                        </Tabs>
                    </div>
                    
                </div>

            </div>
        </div>

        <Footer />
        </>
    )

}

export default CurrentReservations;