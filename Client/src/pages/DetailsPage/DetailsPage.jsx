import { Navbar, Footer } from '../../components';
import './DetailsPage.css';
import { useState } from "react";

function DetailsPage (props) {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (imageSource) => {
        setSelectedImage(imageSource);
    };
    const handleCloseImage = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <Navbar />
            <div className="detailsPage">
                <div className="ImageColumns">
                    <div className="MainHotelImage">
                        {/* Filler:
                        <img width="1091" alt="Screen Shot 2023-04-16 at 8 23 45 PM" src="https://user-images.githubusercontent.com/89716705/232370491-30a90f33-400b-4fd2-b3f7-19dfe040b237.png" onClick={() => handleImageClick("https://user-images.githubusercontent.com/89716705/232370491-30a90f33-400b-4fd2-b3f7-19dfe040b237.png")}></img>
                        */}
                        <img width={props.imgs[0].width} alt={props.imgs[0].alt} src={props.imgs[0].src} onClick={() => handleImageClick(props.imgs[0].src)}></img>
                    </div>
                    <div className="OtherHotelImages">
                        {/* Filler:
                        <img width="936" alt="Screen Shot 2023-04-16 at 1 19 09 AM" src="https://user-images.githubusercontent.com/89716705/232285449-29969eb8-7f2c-44e4-bf2c-bc8f8f4999de.png" onClick={() => handleImageClick("https://user-images.githubusercontent.com/89716705/232285449-29969eb8-7f2c-44e4-bf2c-bc8f8f4999de.png")}></img>
                        <img width="405" alt="Screen Shot 2023-04-16 at 8 25 45 PM" src="https://user-images.githubusercontent.com/89716705/232370778-00e8eae9-1c1f-4d79-ba3e-45425f788eb4.png" onClick={() => handleImageClick("https://user-images.githubusercontent.com/89716705/232370778-00e8eae9-1c1f-4d79-ba3e-45425f788eb4.png")}></img>
                        <img width="936" alt="Screen Shot 2023-04-16 at 1 19 09 AM" src="https://user-images.githubusercontent.com/89716705/232285449-29969eb8-7f2c-44e4-bf2c-bc8f8f4999de.png" onClick={() => handleImageClick("https://user-images.githubusercontent.com/89716705/232285449-29969eb8-7f2c-44e4-bf2c-bc8f8f4999de.png")}></img>
                        <img width="936" alt="Screen Shot 2023-04-16 at 1 19 09 AM" src="https://user-images.githubusercontent.com/89716705/232285449-29969eb8-7f2c-44e4-bf2c-bc8f8f4999de.png" onClick={() => handleImageClick("https://user-images.githubusercontent.com/89716705/232285449-29969eb8-7f2c-44e4-bf2c-bc8f8f4999de.png")}></img>
                        */}
                        <img width={props.imgs[1].width} alt={props.imgs[1].alt} src={props.imgs[1].src} onClick={() => handleImageClick(props.imgs[1].src)}></img>
                        <img width={props.imgs[2].width} alt={props.imgs[2].alt} src={props.imgs[2].src} onClick={() => handleImageClick(props.imgs[2].src)}></img>
                        <img width={props.imgs[3].width} alt={props.imgs[3].alt} src={props.imgs[3].src} onClick={() => handleImageClick(props.imgs[3].src)}></img>
                        <img width={props.imgs[4].width} alt={props.imgs[4].alt} src={props.imgs[4].src} onClick={() => handleImageClick(props.imgs[4].src)}></img>
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
                            {/* Filler:
                            <h1 className='hotelName'>Hotel 1</h1>
                            */}
                            <h1 className='hotelName'>{props.hotelName}</h1>
                            {/* Filler:
                            <h3 className='hotelAddress'>100 Smart Street, LA, USA</h3>
                            */}
                            <h3 className='hotelAddress'>{props.hotelAddress}</h3>
                        </div>
                        <div className="descriptionWithTitle">
                            <h2>Hotel Description</h2>
                            {/* Filler:
                            <h3 className='hotelDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
                            */}
                            <h3 className='hotelDescription'>{props.hotelDescription}</h3>
                        </div>
                        <div className="amenities">
                            <h2>Offered Amenities</h2>
                            <div className="amenitieAttributes">
                                {/* Filler:
                                <ul>
                                    <h3>🍴 Kitchen</h3>
                                    <h3>📺 Television with Netflix</h3>
                                    <h3>❆ Air Conditioner</h3>
                                    <h3>ᯤ Free Wireless Internet</h3>
                                    <h3>🧺 Washer</h3>
                                    <h3>🌆 Balcony or Patio</h3>
                                    <h3>🥼 Cleaner</h3>
                                    <h3>🅿️ Parking</h3>
                                </ul>
                                */}
                                <ul>
                                    {props.amenities.map((amenity) => {
                                        return <h3>{amenity}</h3>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className = "Booking">
                    
                    </div>
                </div>
                
            </div>
            <Footer />
        </>
    )
}

export default DetailsPage;