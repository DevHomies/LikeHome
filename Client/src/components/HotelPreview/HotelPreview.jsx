import './HotelPreview.css';
import '../../index.css';

function HotelPreview (props) {

    // Clicking on a hotel preview redirects user to corresponding hotel page
    function handleClick() {
        console.log(props.title);
        // TO-DO: Redirect to corresponding page
    }

    const details = props.details.map(
        (detail, index) => { 
            return (<li>{detail}</li>);
    }
        )
    return (
        <div>
            <div className='container' onClick= {() => handleClick()} >
            <img src = "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI="></img>
                <div className='info'>
                    <h4 className='title'>{props.title}</h4>
                    <div className = "price"> ${props.price} </div>
                    <h6>{props.address}</h6>
                    <div className = "breakContainer">
                        <hr className = 'break' ></hr>
                    </div>
                    <ul className = "details">
                        {details}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HotelPreview;