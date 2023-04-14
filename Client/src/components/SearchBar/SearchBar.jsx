import './SearchBar.css';
import CheckInCheckOut from '../CheckInCheckOut/CheckInCheckOut';
import Location from '../Location/Location';
import TrRo from '../Travelers_Rooms/TrRo';
import { Link } from 'react-router-dom';
import { useState } from "react";


function SearchBar() {
    return (
        <div className="SBcontainer">
            <div className='searchBlock'>
                <Location />
                <CheckInCheckOut />
                <TrRo />

                <div className='YellowSearchButton'>
                    <Link to='/Search'>
                        <button className='SearchButton'>
                        Search 
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default SearchBar;
