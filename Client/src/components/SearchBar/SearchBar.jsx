import './SearchBar.css';
import CheckInCheckOut from '../CheckInCheckOut/CheckInCheckOut';
import Location from '../Location/Location';
import TrRo from '../Travelers_Rooms/TrRo';
import { Link, useNavigate } from 'react-router-dom';

function SearchBar() {
    const navigate = useNavigate();
    var searchState = {location: "", checkDates: null, rooms: 1, travelers: 1 };
    const dataCallback = (newKey, newData) => {
        searchState = {...searchState, [newKey]: newData};
    }

    const handleClick = () => {
        navigate('/Search', { state: searchState });
    }

    return (
        <div className="SBcontainer">
            <div className='searchBlock'>
                <Location parentCallback={dataCallback}/>
                <CheckInCheckOut parentCallback={dataCallback}/>
                <TrRo parentCallback={dataCallback}/>

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
