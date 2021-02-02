import React from 'react';

import './InfoBar.css';

// import closeIcon from '../../icons/closeIcon'; these will be downloaded later, see 1:21:40, in the mean time...
let onlineIcon = "ONLINE YAAAS";
let closeIcon = "YOU LEAVIN?!";
// import onlineIcon from '../../icons/onlineIcon';

const InfoBar = () => {
<div className="infoBar">
    <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online image"/>
        <h3>roomName</h3>
    </div>
    <div className="RightInnerContainer">
        <a href="/"><img src={closeIcon} alt="close image"/></a>
    </div>
</div>
}

export default InfoBar;