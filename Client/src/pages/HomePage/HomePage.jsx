import React, {useState, useEffect}from "react";
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
                <div className="BigHomepageText">
                    {/*
                    <h1>Find A Hotel</h1>
                    <h2>Anytime. Anyplace. Anywhere.</h2>
                    */}
                </div>
                <img src= '/assets/images/LikeHomePage.png' />
                <SearchBar />
            </div>
            <div className="body-container">
            </div>
            <Footer />
        </>
    )

}

export default HomePage;