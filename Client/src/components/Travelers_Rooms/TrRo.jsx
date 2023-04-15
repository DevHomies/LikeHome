import './TrRo.css';
import Travelers from './Travelers/Travelers';
import Rooms from './Rooms/Rooms';

function TrRo() {

    return (
    <div className="TrRoContainer">
      <Travelers />
      <hr/>         
      <Rooms />
    </div>
    )
}

export default TrRo;