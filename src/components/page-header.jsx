import React from 'react';
import clockImg from '../images/clock.png';

export default function PageHeader(){
    return (
    <div className="header-container">
        <img className="clock-img" src={clockImg} alt="" />
        <div>Service Time </div><span className="keepr"> Keepr</span>
    </div>
    )
}