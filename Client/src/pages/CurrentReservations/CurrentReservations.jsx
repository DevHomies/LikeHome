import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Footer, UpcomingReservations, PastReservations } from '../../components'; 
import './CurrentReservations.css';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { authlogin } from "../../pages/Login/Login";
import axios from 'axios';

function CurrentReservations() { 
    const [open, setOpen] = useState(false);

    const blurBg = (e) => {
        setOpen(e);
    }

    const navigate = useNavigate();
    const logout_handle = async () => {
        const response = await axios.get('/catalog/logout/');
        if (response.data.success){
            authlogin = false
            navigate('login/');
        }
    }

    return (
        <div>
            <Navbar />
            <div className="ReservationsContainer">
                <div className={ open? "payment-blur RewardStripContainer" : "RewardStripContainer"}>
                    <div className="RewardBox">
                        <p>YOU HAVE 300 REWARD POINTS AVAILABLE</p>
                    </div>
                </div>

                <div className="BoxContainerCR">

                    <div className="TopContainerCR">

                        <div className={open ? "payment-blur AccountLinkPages" : "AccountLinkPages"}>
                            <p><Link to='/account' className='AccountLinks'>Account</Link></p>
                            
                            <p><Link to='/UserReservations' className='AccountLinks'>Reservations</Link></p>
                            
                            <p onClick={logout_handle}>Log Out</p>
                        </div>

                        <div className="ReservationtabsContainer">
                            <Tabs className="tabsContainer">
                                
                                <TabList>
                                <Tab><p id="Rtabs">Upcoming</p></Tab>
                                <Tab><p id="Rtabs">Past</p></Tab>
                                </TabList>

                                <TabPanel>  
                                    <UpcomingReservations parentCallback={blurBg}/>
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
        </div>
    )

}

export default CurrentReservations;