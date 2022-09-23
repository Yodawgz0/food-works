import React from "react";
import BgPic from "../assets/test.png"
import ReservePic from "../assets/reservee.png"

export default function Testimonials() {
    return(
        <div className="testcontainer">
            <img alt="BgPic" src={BgPic} />
            <img alt="ReservePic" src={ReservePic} className="centerpic"/>
        <div className="testimonialcontainer">
           
           
            <h2 className="testimonialcontainer__mainheading">Our customers Fall in Love With Us</h2>
            <div className="testimonialcontainer__blackline"></div>
            <p className="testimonialcontainer__details">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
            dicta sunt explicabo."</p>
            <div className="testimonialcontainer__redline"></div>
        </div>
            <div className="ReservationContainer">
                <h3 className="ReservationContainer__smallheading">join us</h3>
                <h2 className="ReservationContainer__heading">Book a table Now, Come and See Us</h2>
                <button className="ReservationContainer__reservebtn">Reservation</button>
                <div className="ReservationContainer__bottomredline"></div>
            </div>
        </div>
    
    );
}