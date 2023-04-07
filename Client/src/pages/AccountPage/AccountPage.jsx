import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../../components'; 
import './AccountPage.css';

const AccountPage = () => { 

    return (
        <>
        <Navbar />
        
        <div className="AccountPageContainer">

            <div className="RewardStripContainer">
                <div className="RewardBox">
                    <p>YOU HAVE 3,000,000,000,000 REWARD POINTS AVAILABLE</p>
                </div>
            </div>

            <div className="BoxContainer">

                <div className="TopContainer">

                    <div className="AccountLinkPages">
                        <p><Link to='/' className='AccountLinks'>Account</Link></p>
                        
                        <p><Link to='/' className='AccountLinks'>Reservations</Link></p>
                    
                        <p><Link to='/' className='AccountLinks'>Transaction History</Link></p>

                        <p><Link to='/' className='AccountLinks'>Change Password</Link></p>
                    </div>

                    <div className="InputFieldContainer">

                        <div className="UserName">
                            <div className="First">
                                <p>First Name</p>
                                <input type='text' 
                                placeholder='First Name' />
                            </div>

                            <div className="Last">
                                <p>Last Name</p>
                                <input type='text' 
                                placeholder='Last Name' />
                            </div>
                        </div>

                        <div className="ContactInfo">
                            <div className="Email">
                                <p>Email</p>
                                <input type='text' 
                                placeholder='Email' />
                            </div>

                            <div className="Phone">
                                <p>Phone Number</p>
                                <input type='text' 
                                placeholder='#' />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="BotContainer">

                    <div className="SaveChangesButton">
                        <button type="button"> 
                            Save Changes
                        </button>
                    </div>

                </div>

            </div>

        </div>
        <Footer />
        </>
    )
}

export default AccountPage;