import './Navbar.css';
import {FaBars} from "react-icons/fa";
import {useState} from "react";

//Navbar and FaBars code inspired by https://www.youtube.com/watch?v=amf18mxNX18
//Dropdown Menu code inspired by https://www.robinwieruch.de/react-dropdown/
function Navbar() {
    //Code inspired by https://www.robinwieruch.de/react-dropdown/
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    //Open link after button clicked
    //Code inspired by https://stackoverflow.com/questions/8454510/open-url-in-same-window-and-in-same-tab
    const handleAccount = () => {
        setOpen(false);
        window.open("/#", "_self");
    };
    const handleReservations = () => {
        setOpen(false);
        window.open("/#", "_self");
    };
    const handleTransaction = () => {
        setOpen(false);
        window.open("/#", "_self");
    };
    const handleLogout = () => {
        setOpen(false);
        window.open("/#", "_self");
    };

    return (
        <header>
            <h3>LIKEHOME</h3>

            {/* The signedOut section is only shown when user is signed out */}
            {/* Gives signed out user the option to sign up or login */}
            {/*
            <div className="signedOut">
                <a href="/#">Sign Up</a>
                <h7>|</h7>
                <a href="/#">Login</a>
            </div>
            */}

            {/* The dropdown section is only shown when user is signed in */}
            {/* Dropdown menu shows options for signed in users */}
            <div className="dropdown">
                <FaBars className= "dropdownBtn" onClick={handleOpen}></FaBars>
                {open ? (
                    <ul className="menu">
                        <li className="menu-item">
                            <button onClick={handleAccount}>Account</button>
                        </li>
                        <li className="menu-item">
                        <button onClick={handleReservations}>Reservations</button>
                        </li>
                        <li className="menu-item">
                        <button onClick={handleTransaction}>Transaction History</button>
                        </li>
                        <li className="menu-item">
                        <button onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                ) : null}
            </div>
        </header>
    );
}

//Add this line to App.js: import Navbar from "./components/Navbar/Navbar";
//Let App.js return this:
//  <React.Fragment>
//      <Navbar/>
//  </React.Fragment>

export default Navbar;