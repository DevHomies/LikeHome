import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../../components'; 
import './AccountPage.css';


function AccountPage({parentCallback}) { 
    const [reward, setReward] = useState([]); 
    const [rewardPoints, setRewardPoints] = useState(0);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [joined, setJoined] = useState("");

    useEffect(() => {
        fetch('/catalog/reward/')
            .then(response => response.json())
            .then(reward => setReward(reward))
            .catch(error => console.error(error));
      },[]);
    
      useEffect(() => {
        if (reward[0] !== undefined)
          setRewardPoints(reward[0].reward_points);
      },[reward])

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/catalog/account/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
      },[]);
    
      console.log(data);
    useEffect(() => {
        if (data[0] !== undefined) {
            setUsername(data[0].username);
            setEmail(data[0].email);
            setJoined(data[0].date_joined)
        }
    }, [data])


    return (
        <>
        <Navbar />
        
        <div className="AccountPageContainer">

            <div className="RewardStripContainer">
                <div className="RewardBox">
                    <p>YOU HAVE {rewardPoints} REWARD POINTS AVAILABLE</p>
                </div>
            </div>

                <div className="BoxContainer">

                    <div className="FormContainer">

                        <div className="AccountLinkPages">
                            <p><Link to='/account' className='AccountLinks'>Account</Link></p>
                            
                            <p><Link to='/UserReservations' className='AccountLinks'>Reservations</Link></p>

                            <p><Link to='/Login' className='AccountLinks'>Log Out</Link></p>
                            
                        </div>

                        <form className="InputFieldContainer" >

                            <div className="UserName">
                                <div className="First">
                                    <label>Username : </label>
                                    <p>{username}</p>
                                </div>

                                <div className="Last">
                                    <label >Email  : </label>
                                    <p>{email}</p>
                                </div>
                            </div>

                            <div className="ContactInfo">
                                <p>Date Joined: {joined.slice(0, 10)}</p>
                            </div>
                        </form>

                    </div>

                </div>

        </div>
        <Footer />
        </>
    )
}

export default AccountPage;