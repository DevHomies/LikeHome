import { Navbar, Footer, BookNow } from '../../components';
import './DetailsPage.css';
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function DetailsPage () {
    const { state } = useLocation();
    const navigate = useNavigate();

    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (imageSource) => {
        setSelectedImage(imageSource);
    };
    const handleCloseImage = () => {
        setSelectedImage(null);
    };

    const toPayment = () => {
        navigate(`/pay`, { state: state });
    }

    return (
        <>
            <Navbar />
            <div className="detailsPage">
                <div className="ImageColumns">
                    <div className="MainHotelImage">
                        {/* Filler: */}
                        <img width="1091" alt="Screen Shot 2023-04-16 at 8 23 45 PM" src="https://user-images.githubusercontent.com/89716705/232370491-30a90f33-400b-4fd2-b3f7-19dfe040b237.png" onClick={() => handleImageClick("https://user-images.githubusercontent.com/89716705/232370491-30a90f33-400b-4fd2-b3f7-19dfe040b237.png")}></img>
                       
                        {/* <img width={props.imgs[0].width} alt={props.imgs[0].alt} src={props.imgs[0].src} onClick={() => handleImageClick(props.imgs[0].src)}></img> */}
                    </div>
                    <div className="OtherHotelImages">
                        {/* Filler: */}
                        <img width="936" alt="Screen Shot 2023-04-16 at 1 19 09 AM" src="https://i0.wp.com/www.prachiable.com/wp-content/uploads/2017/01/img_4113-1.jpg?ssl=1" onClick={() => handleImageClick("https://i0.wp.com/www.prachiable.com/wp-content/uploads/2017/01/img_4113-1.jpg?ssl=1")}></img>
                        <img width="405" alt="Screen Shot 2023-04-16 at 8 25 45 PM" src="https://user-images.githubusercontent.com/89716705/232370778-00e8eae9-1c1f-4d79-ba3e-45425f788eb4.png" onClick={() => handleImageClick("https://user-images.githubusercontent.com/89716705/232370778-00e8eae9-1c1f-4d79-ba3e-45425f788eb4.png")}></img>
                        <img width="936" alt="Screen Shot 2023-04-16 at 1 19 09 AM" src="https://media.istockphoto.com/id/1079901206/photo/3d-render-of-luxury-restaurant-interior.jpg?s=612x612&w=0&k=20&c=kKj5Uw0ZpuWKX8ZX6eXuKGc1sP86fMjIbZJFbWl9-ZM=" onClick={() => handleImageClick("https://media.istockphoto.com/id/1079901206/photo/3d-render-of-luxury-restaurant-interior.jpg?s=612x612&w=0&k=20&c=kKj5Uw0ZpuWKX8ZX6eXuKGc1sP86fMjIbZJFbWl9-ZM=")}></img>
                        <img width="936" alt="Screen Shot 2023-04-16 at 1 19 09 AM" src="https://media.istockphoto.com/id/510564942/photo/hot-tub-in-a-spa-center.jpg?s=612x612&w=0&k=20&c=sBOb5Vd6Kg0JZt9Bkk70ijJVbenZvDe7rOHbGaoSAgg=" onClick={() => handleImageClick("https://media.istockphoto.com/id/510564942/photo/hot-tub-in-a-spa-center.jpg?s=612x612&w=0&k=20&c=sBOb5Vd6Kg0JZt9Bkk70ijJVbenZvDe7rOHbGaoSAgg=")}></img>
                       
                        {/* <img width={props.imgs[1].width} alt={props.imgs[1].alt} src={props.imgs[1].src} onClick={() => handleImageClick(props.imgs[1].src)}></img>
                        <img width={props.imgs[2].width} alt={props.imgs[2].alt} src={props.imgs[2].src} onClick={() => handleImageClick(props.imgs[2].src)}></img>
                        <img width={props.imgs[3].width} alt={props.imgs[3].alt} src={props.imgs[3].src} onClick={() => handleImageClick(props.imgs[3].src)}></img>
                        <img width={props.imgs[4].width} alt={props.imgs[4].alt} src={props.imgs[4].src} onClick={() => handleImageClick(props.imgs[4].src)}></img> */}
                    </div>
                </div>
                {selectedImage && (
                    <div className="FocusImage">
                        <div className="FocusImageClose" onClick={handleCloseImage}></div>
                        <img src={selectedImage} alt="Selected" />
                    </div>
                )}
                <div className="ColumnInfo">
                    <div className="HotelInfo">
                        <div className="nameAndAddress">
                            <div>
                                <h1 className='hotelName'>{state.title}</h1>
                            
                                <h3 className='hotelAddress'>{state.address}</h3>
                            </div>

                            <div className = "Booking">
                                <BookNow parentCallback={toPayment} />
                            </div>
                        </div>
                        <div className="descriptionWithTitle">
                            <h2 className='hotel-title'>Hotel Description</h2>

                            {/* Filler: */}
                            <h3 className='hotelDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
                           
                            {/* <h3 className='hotelDescription'>{props.hotelDescription}</h3> */}
                        </div>
                        <div className="amenities">
                            <h2 className='hotel-title'>Offered Amenities</h2>
                            <div className="amenitieAttributes">
                                <ul>
                                    {state.details.map((amenity) => {
                                        return <h3>{amenity}</h3>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetailsPage;