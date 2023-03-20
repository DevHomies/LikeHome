import './HotelPreview.css';
import '../../index.css';

function HotelPreview (props) {
    const details = props.details.map((detail) => <li>{detail}</li>)
    return (
        <div>
            <div className='container'>
            <img src = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"></img>
                <div className='info'>
                    <h4 className='title'>{props.title}</h4>
                    <h6>{props.address}</h6>
                    <ul>
                        {details}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HotelPreview;