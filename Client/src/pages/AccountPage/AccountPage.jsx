import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../../components'; 
import './AccountPage.css';

function AccountPage({onLogin}) { 
    const [Fname, setFname] = React.useState('');
    const [Lname, setLname] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Phone, setPhone] = React.useState('');

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
        
        //onLogin(form);
    };

    


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

                    <div className="FormContainer">

                        <div className="AccountLinkPages">
                            <p><Link to='/account' className='AccountLinks'>Account</Link></p>
                            
                            <p><Link to='/UserReservations' className='AccountLinks'>Reservations</Link></p>

                            <p><Link to='/Login' className='AccountLinks'>Log Out</Link></p>
                            
                        </div>

                        <form className="InputFieldContainer" onSubmit={handleSubmit} >

                            <div className="UserName">
                                <div className="First">
                                    <p>First Name : </p>
                                    <input type='text' 
                                    placeholder='First Name' 
                                    value={Fname}
                                    onChange={handleFname}/>
                                </div>

                                <div className="Last">
                                    <p>Last Name  : </p>
                                    <input type='text' 
                                    placeholder='Last Name' 
                                    value={Lname}
                                    onChange={handleLname}/>
                                </div>
                            </div>

                            <div className="ContactInfo">
                                <div className="Email">
                                    <p>Email : </p>
                                    <input type='text' 
                                    placeholder='Email' 
                                    value={Email}
                                    onChange={handleEmail}/>
                                </div>

                                <div className="Phone">
                                    <p>Phone Number : </p>
                                    <input type='number' 
                                    maxLength={10}
                                    placeholder='XXX-XXX-XXXX' 
                                    value={Phone}
                                    onChange={handlePhoneNum}/>
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