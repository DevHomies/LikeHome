import React, {useState, useEffect}from "react";
import { Navbar } from '../../components';
import './home.css';

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
            <div className="home-container">
                <h1>HOME PAGE</h1>
            </div>
        </>
    )

}

export default HomePage