import './TrRo.css';
import Travelers from './Travelers/Travelers';
import Rooms from './Rooms/Rooms';

function TrRo() {

    return (
    <div className="TrRoContainer">
        <div className="Wrap">
          <Travelers />
          <hr/>         
          <Rooms />
        </div>
    </div>
    )
}

export default TrRo;