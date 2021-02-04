import React from 'react';

import './InfoBar.css';

// import closeIcon from '../../icons/closeIcon.png'; these will be downloaded later, see 1:21:40, in the mean time...
// import onlineIcon from '../../icons/onlineIcon.png';
let onlineIcon = "ONLINE YAAAS";
let closeIcon = "YOU LEAVIN?!";

const InfoBar = ({room}) => (
<div className="infoBar">
    <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online image"/>
        <h3>{room}</h3>
    </div>
    <div className="RightInnerContainer">
        <a href="/"><img src={closeIcon} alt="close image"/></a>
    </div>
</div>
)

export default InfoBar;