import { useState } from "react";
import './Navbar.css';
import axios from 'axios';

// Import Link for page routing
import { Link,useNavigate } from 'react-router-dom';

// Import Icons
import { IoMenuOutline, IoClose, IoPersonCircle } from "react-icons/io5";

import { authlogin } from "../../pages/Login/Login";

//Navbar and FaBars code inspired by https://www.youtube.com/watch?v=amf18mxNX18
//Dropdown Menu code inspired by https://www.robinwieruch.de/react-dropdown/
function Navbar() {
    //Code inspired by https://www.robinwieruch.de/react-dropdown/
    // Handles dropdown menu
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    // Placeholder for navbar state (logged in vs not)
    const [loggedIn, setLoggedIn] = useState(authlogin);

    const navigate = useNavigate();
    const logout_handle = async () => {
        const response = await axios.get('/catalog/logout/');
        if (response.data.success){
            authlogin = false
            navigate('login/');
        }
    }

    return (
        <header className="nav-header">
            <Link to='/' className="nav-logo"><h1>LIKEHOME</h1></Link>
            
            { loggedIn ? 
                /* The dropdown section is only shown when user is signed in */
                <nav className="dropdown">
                    <div className="dropdown-nav">
                        { open ? 
                            <IoClose className="dropdownBtn" onClick={handleOpen}></IoClose>
                            :
                            <IoMenuOutline className="dropdownBtn" onClick={handleOpen}></IoMenuOutline>
                        }
                        <IoPersonCircle className="profile-btn"></IoPersonCircle>
                    </div>
                    {open ? (
                        <ul className="menu">
                            <li className="menu-item">
                                <Link to='/' className='menu-btn'>Account</Link>
                            </li>

                            <li className="menu-item">
                                <Link to='/' className='menu-btn'>Reservations</Link>
                            </li>

                            <li className="menu-item">
                                <Link to='/' className='menu-btn'>Transaction History</Link>
                            </li>
                            <hr />
                            <li className="menu-item">
                                <button onClick={logout_handle} className='menu-btn'>Logout</button>
                            </li>
                        </ul>
                        ) : null
                    }
                </nav>
                :
                /* The signedOut section is only shown when user is signed out */
                <nav className="signedOut">
                    <Link to='/register' className="signedOut-btn">Sign Up</Link>
                    <h7>|</h7>
                    <Link to='/login' className="signedOut-btn">Login</Link>
                </nav>
            }
        </header>
    );
}

export default Navbar;