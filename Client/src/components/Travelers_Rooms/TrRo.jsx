import './TrRo.css';
import Travelers from './Travelers/Travelers';
import Rooms from './Rooms/Rooms';

function TrRo({parentCallback}) {
    return (
    <div className="TrRoContainer">
      <Travelers parentCallback={parentCallback}/>
      <hr/>         
      <Rooms parentCallback={parentCallback}/>
    </div>
    )
}

export default TrRo;