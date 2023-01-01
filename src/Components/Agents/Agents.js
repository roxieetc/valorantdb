import React, { useState, useEffect } from 'react';
import './Agents.css';
import { Link } from 'react-router-dom';

function Agents() {

    const [agents, setAgents] = useState([]);

    const getAgents = async () => {
        const response = await fetch('https://valorant-api.com/v1/agents')
        const json = await response.json()
        setAgents(json.data)
    }

    useEffect(() => {
        getAgents();
    }, [])

    const agentFilter = agents.filter((agentId) => {
        return agentId.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9"
    })

    let agentList = agentFilter.map((info) => {
        const {displayName, displayIcon, uuid} = info
    
        return (
            <Link to={'/agents/' + uuid} className="singleLink">
                <div className="agentCards">
                    <h2 className="agentName">{displayName}</h2>
                    <img src={displayIcon} alt={displayName} className="agentImage" />
                </div>
            </Link>
        )
    })

    return (
        <div className='agentPage'>
            <h1>Agents</h1>
        <div className="agentList">
            {agentList}
        </div>
        </div>
    )
}

export default Agents;