import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Skins.css'

const Skins = () => {

    const [skins, setSkins] = useState([]);

    const skinInfo = useParams()

    const getSkins = async () => {
        const response = await fetch(`https://valorant-api.com/v1/weapons/${skinInfo.id}`)
        const json = await response.json()
        setSkins(json.data.skins)
    }

    useEffect(() => {
        getSkins()
    }, [])


    let skinsList = skins.map((info) => {

    return (
        <div className="skinCards">
        <h2 className="skinNames">{info.displayName}</h2>
        <img src={info.chromas[0].fullRender} className="skinImages" alt="weapon" />
        </div>
    )
})

    return(
        <div className='skinsPage'>
        <h1>Available Skins</h1>
        <div className="skinsList">
        {skinsList}
        </div>
        </div>
    )
}

export default Skins;