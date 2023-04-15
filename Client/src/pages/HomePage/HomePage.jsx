import React, { useState, useEffect }from "react";
import { Navbar, Footer,SearchBar } from '../../components';
import './HomePage.css';

const HomePage = () => {
    // let [info, setInfo] = useState([])

    // useEffect(() => {
    //     getInfo()

    // }, [])

    // let getInfo = async () => {
    //     let response = await fetch('catalog/info')
    //     let data = await response.json()
    //     console.log('Data:', data)
    //     setInfo(data)
    // }

    return (
        <>
            <Navbar />
            <div className="header-container">
                <div className="header-bg"></div>
                <div className="header-bg2"></div>
                <div className="header-text">
                    <p> Find A Hotel</p>
                    <p>Anytime. <font color ="#F6C851">Anywhere.</font></p>
                </div>
                {/* <img src='/assets/images/LHbackground.png' alt='bg'/> */}
                <SearchBar />
            </div>
            <Footer />
        </>
    )

}

export default HomePage;