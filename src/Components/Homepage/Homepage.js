import React from "react";
import './Homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {

    return (
        <div>
            <h1 className="hpTitle">Valorant Database</h1>
                <div className="buttonList">
                    <Link to ={'/agents'} className="singleLink">
                        <button className="hpButton"><h1 className="linkText">agents</h1></button>
                    </Link>
                    <Link to ={'/maps'} className="singleLink">
                        <button className="hpButton"><h1 className="linkText">maps</h1></button>
                    </Link>
                    <Link to ={'/weapons'} className="singleLink">
                        <button className="hpButton"><h1 className="linkText">weapons</h1></button>
                    </Link>
                    <Link to ={'/sprays'} className="singleLink">
                        <button className="hpButton"><h1 className="linkText">sprays</h1></button>
                    </Link>
                    <Link to ={'/cards'} className="singleLink">
                        <button className="hpButton"><h1 className="linkText">player cards</h1></button>
                    </Link>
                </div>
        </div>
    )
}

export default Homepage;