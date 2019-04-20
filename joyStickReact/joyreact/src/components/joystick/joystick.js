import React, { Component } from "react";
import "./joystick.css";
// import  joy from  "../../js/joystick_view";
// import backbone from "../../js/backbone-min";
// import un from "../../js/underscore-min";




class Joystick extends Component {

    componentDidMount() {
        // joy()
        // backbone()
        // un()
        // eslint-disable-next-line
        let joystickView = new JoystickView(150, function(callbackView) { }) 

    }





    render() {
       

       
        return (

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
    }
}



export default Joystick;