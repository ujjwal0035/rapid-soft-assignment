import React from 'react';
import './box.css'
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SpeedSharpIcon from '@material-ui/icons/SpeedSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import AccountBalanceWalletSharpIcon from '@material-ui/icons/AccountBalanceWalletSharp';
const Box = () => {
    return (
        <div className="boxContainer">
            <div className="seprate">
                <div className="firstBoxElement">
                    <div className="boxOne">
                        <LocalShippingIcon />
                        <span className="nameLetter">DLIDW 6461(TATA ACE)</span>
                    </div>
                    <div className="boxTwo">
                        <WatchLaterSharpIcon />
                        <span className="nameLetter">Trip Time : 10 Hrs 42 min</span>
                    </div>
                    
                </div>
                <div className="secondBoxElement">
                <div className="boxOne">
                        <LocalShippingIcon />
                        <span className="nameLetter">Total Trip : 11</span>
                    </div>
                    <div className="boxTwo">
                        <WatchLaterSharpIcon />
                        <span className="nameLetter">Total Time : 10 Hrs 40 m</span>
                    </div>
                </div>
                <div className="thirdBoxElement">
                    
                    <div className="boxOne">
                        <SpeedSharpIcon />
                        <span className="nameLetter">Total Time : 10 Hrs 40 m</span>
                    </div>
                    <div className="boxTwo">
                        <AccountBalanceWalletSharpIcon />
                        <span className="nameLetter">Total Time : 10 Hrs 40 m</span>
                    </div>
                </div>
            </div>
            
            <div className="otherExpBox">
                <AccountBalanceWalletSharpIcon />
                <span className="nameLetter">Total Time : 10 Hrs 40 m</span>
            </div>
        </div>
    );
};

export default Box;