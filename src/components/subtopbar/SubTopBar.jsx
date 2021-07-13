import React from 'react';
import './subtopbar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import SearchIcon from '@material-ui/icons/Search';
  import PowerSettingsNewIcon from '@material-ui/icons/Search';
const SubTopBar = () => {
    
    return (
        <Router>
        <div className="subTopBar">
            <div className="subTopBarLeft">
                <span className="tripSummary">Trip Summary</span>
                <br/>
                <Link to="/" className="Link link1" >DashBord</Link>
                <span>/</span>
                <Link to="/tripsummary" className="Link">Trip Summary</Link>
                
            </div>
            <div className="subTopBarRight">
                <label>From</label>
                <input className="dateInput" type="date"></input>
                <label>To</label>
                <input className="dateInput" type="date"></input>
                <span className="searchIcon">
                    <SearchIcon className="searchIcon"/>
                </span>
                
                <button className="exportButton">Export</button>
            </div>
        </div>
        </Router>
        
    );
};

export default SubTopBar;