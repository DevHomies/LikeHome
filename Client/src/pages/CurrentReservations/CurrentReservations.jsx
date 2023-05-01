import React from "react";
import { useState,useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Footer, UpcomingReservations, PastReservations } from '../../components'; 
import './CurrentReservations.css';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { authlogin } from "../../pages/Login/Login";
import axios from 'axios';

function CurrentReservations() { 
    const [open, setOpen] = useState(false);
    const [data1, setData] = useState([]);
    const [reward, setReward] = useState([]);

    const blurBg = (e) => {
        setOpen(e);
    }

    useEffect(() => {
        fetch('/catalog/currentreservation/')
            .then(response => response.json())
            .then(data1 => setData(data1))
            .catch(error => console.error(error));
      },[]);

    // console.log("temp data:",data1)


    useEffect(() => {
        fetch('/catalog/reward/')
            .then(response => response.json())
            .then(reward => setReward(reward))
            .catch(error => console.error(error));
      },[]);

    console.log("reward check: ", reward);

    const navigate = useNavigate();
    const logout_handle = async () => {
        const response = await axios.get('/catalog/logout/');
        if (response.data.success){
            authlogin = false
            navigate('/login');
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
                                    <UpcomingReservations data1={data1} parentCallback={blurBg}/>
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