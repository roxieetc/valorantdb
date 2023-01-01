import React, { useState, useEffect } from 'react';
import './Maps.css'

function MapList() {

    const [maps, setMaps] = useState([]);

    const getMaps = async () => {
        const response = await fetch('https://valorant-api.com/v1/maps')
        const json = await response.json()
        setMaps(json.data)
    }

    useEffect(() => {
        getMaps();
    }, [])

    let mapList = maps.map((info) => {
        const {displayName, splash} = info
    
        return (
             <div className="mapCards">
                <h2 className="mapName">{displayName}</h2>
                <div className='mapImageContainer'>
                    <img src={splash} alt={displayName} className="mapImage" />
                </div>
            </div>
        )
    })

    return (
        <div className='mapsPage'>
            <h1>Maps</h1>
        <div className="mapList">
            {mapList}
        </div>
        </div>
    )
}

export default MapList;