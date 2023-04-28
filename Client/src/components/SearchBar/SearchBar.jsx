import './SearchBar.css';
import CheckInCheckOut from '../CheckInCheckOut/CheckInCheckOut';
import Location from '../Location/Location';
import TrRo from '../Travelers_Rooms/TrRo';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

function SearchBar() {
    const navigate = useNavigate();
    const [searchState, setSearchState] = useState({
        location: "", checkDates: null, rooms: 1, travelers: 1 
    })
    const dataCallback = (newKey, newData) => {
        setSearchState({...searchState, [newKey]: newData});
    }
    const [showError, setShowError] = useState(false);


    const handleClick = () => {
        if (searchState.location == "" || searchState.checkDates == null) 
            setShowError(true);
        else 
            navigate('/Search', { state: searchState });

    }

    return (
        <div className="SBcontainer">
            <div className='searchBlock'>
                <Location parentCallback={dataCallback}/>
                <CheckInCheckOut parentCallback={dataCallback}/>
                <TrRo parentCallback={dataCallback}/>

                <div className="home-error">{showError ? "Please fill out all fields" : ""}</div>
                <div className='YellowSearchButton'>
                    <button className='SearchButton' onClick={handleClick}>
                    Search 
                    </button>
                </div>
            </div>
        </div>
    );
}


export default SearchBar;
