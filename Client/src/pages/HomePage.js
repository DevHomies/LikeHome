import React, {useState, useEffect}from "react";


const HomePage = () => {
    let [info, setInfo] = useState([])

    useEffect(() => {
        getInfo()

    }, [])

    let getInfo = async () => {
        let response = await fetch('catalog/info')
        let data = await response.json()
        console.log('Data:', data)
        setInfo(data)
    }
    return (
        <div className="notes-list">
            {info.map((info, index) => (
                <h3>{info.room}</h3>
            ))}
            <h1>HELLO WORLD</h1>
        </div>
    )

}

export default HomePage