import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import './topbar.css'
const Topbar = () => {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <DehazeIcon className="optionBar"/>
                <div className="logoName">
                    <img className="logoimg" src="./watsooLog.jpg" alt="Logo"></img>
                    
                </div>
            </div>
            <div className="topbarRight">
                <button className="logoutButton">
                    <PowerSettingsNewIcon className="powerIcon"/>
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Topbar;