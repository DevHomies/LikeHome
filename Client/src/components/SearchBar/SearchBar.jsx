import './SearchBar.css';
import CheckInCheckOut from '../CheckInCheckOut/CheckInCheckOut';
import Location from '../Location/Location';
import TrRo from '../Travelers_Rooms/TrRo';
import YellowSearchButton from '../YellowSearchButton/YellowSearchButton';

function SearchBar() {
    return (
        <div className="SBcontainer">
            <div className='searchBlock'>
              <Location />
              <CheckInCheckOut />
              <TrRo />
              <YellowSearchButton />
            </div>
        </div>
    );
}


export default SearchBar;
