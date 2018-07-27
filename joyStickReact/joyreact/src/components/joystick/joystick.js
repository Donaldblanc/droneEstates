import React from "react";
import "./joystick.css";


const Joystick = props => (
    <div>
        <p> This is a test of the joy stick</p>


        <div id="joystickContent">
        </div>
        <div>
            x: <span id="xVal"></span><br />
            y: <span id="yVal"></span><br />
        </div>
        
    </div>
);




export default Joystick;