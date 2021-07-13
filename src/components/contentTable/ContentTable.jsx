import React from 'react';
import "./contenttable.css"
import RemoveIcon from '@material-ui/icons/Remove';
import { useState } from 'react';
const ContentTable = () => {
    
    return (
        <div className="mainTable">
            <div className="tableTopbar">
                <span>Date: 04/19/2020 at 5:20AM - 04/19/2020 at 10:20AM ( Hrs 0 Minutes)</span>
                <span>Total KM: 165 <span>Total Expense: 0</span></span>
                <RemoveIcon className="minimiseTable" />
            </div>
            <div className="tableContainer">
                <table>
                    <thead>
                        <tr>
                        <th >#</th>
                        <th >Trip Start(Node) to Trip ends(Node)</th>
                        <th >Driver Name</th>
                        <th > Trip Expense</th>
                        <th >Trip KM</th>
                        <th >Trip GPS KM</th>
                        <th > Trip Time</th>
                        <th >Odometer Reading</th>
                        <th ></th></tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Iffac to dawarka</td>
                        <td>Ujjwal kumar</td>
                        <td>5000</td>
                        <td>100KM</td>
                        <td>0 KM</td>
                        <td>5 Hr</td>
                        <td>{`0 --> 0`}</td>
                        <td><button className="reportButton">Movement Report</button><button className="reportButton">Stop Report</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Iffac to dawarka</td>
                        <td>Ujjwal kumar</td>
                        <td>5000</td>
                        <td>100KM</td>
                        <td>0 KM</td>
                        <td>5 Hr</td>
                        <td>{`0 --> 0`}</td>
                        <td><button className="reportButton">Movement Report</button><button className="reportButton">Stop Report</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Iffac to dawarka</td>
                        <td>Ujjwal kumar</td>
                        <td>5000</td>
                        <td>100KM</td>
                        <td>0 KM</td>
                        <td>5 Hr</td>
                        <td>{`0 --> 0`}</td>
                        <td><button className="reportButton">Movement Report</button><button className="reportButton">Stop Report</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Iffac to dawarka</td>
                        <td>Ujjwal kumar</td>
                        <td>5000</td>
                        <td>100KM</td>
                        <td>0 KM</td>
                        <td>5 Hr</td>
                        <td>{`0 --> 0`}</td>
                        <td><button className="reportButton">Movement Report</button><button className="reportButton">Stop Report</button></td>
                    </tr>
                    </tbody>
                        
                </table>
            </div>
        </div>
    );
};

export default ContentTable;