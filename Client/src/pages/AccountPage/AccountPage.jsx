import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../../components'; 
import './AccountPage.css';

function AccountPage({parentCallback}) { 
    // const { state } = useLocation();
    // const navigate = useNavigate();
    const [Fname, setFname] = React.useState('');
    const [Lname, setLname] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Phone, setPhone] = React.useState('');
    const [reward, setReward] = useState([]); 
    const [rewardPoints, setRewardPoints] = useState(0);

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

    const handleFname = (event) => {
        setFname(event.target.value);
        };
    const handleLname = (event) => {
        setLname(event.target.value);
        };

    const handleEmail = (event) => {
        setEmail(event.target.value);
        };

    const handlePhoneNum = (event) => {
        setPhone(event.target.value.slice(0, 10));
        };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Name: " + Fname + " " + Lname + " " +
              " Email: " + Email + " Phone number: " + Phone);
        //parentCallback(true);

    };

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

                        <form className="InputFieldContainer" onSubmit={handleSubmit} >

                            <div className="UserName">
                                <div className="First">
                                    <label htmlFor="first-name">First Name : </label>
                                    <input type='text' 
                                        placeholder='First Name' 
                                        value={Fname}
                                        onChange={handleFname}
                                        id='first-name'
                                    />
                                </div>

                                <div className="Last">
                                    <label htmlFor="last-name">Last Name  : </label>
                                    <input type='text' 
                                        placeholder='Last Name' 
                                        value={Lname}
                                        onChange={handleLname}
                                        id='last-name'
                                    />
                                </div>
                            </div>

                            <div className="ContactInfo">
                                <div className="Email">
                                    <label htmlFor='account-page-email'>Email : </label>
                                    <input type='text' 
                                        placeholder='Email' 
                                        value={Email}
                                        onChange={handleEmail}
                                        id="account-page-email"
                                    />
                                </div>

                                <div className="Phone">
                                    <label htmlFor="account-phone-number">Phone Number : </label>
                                    <input type='number' 
                                        maxLength={10}
                                        placeholder='XXX-XXX-XXXX' 
                                        value={Phone}
                                        onChange={handlePhoneNum}
                                        id="account-phone-number"
                                    />
                                </div>
                            </div>

                            <div className="SaveChangesButton">
                                    <button type="submit">
                                        Save Changes
                                    </button>
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