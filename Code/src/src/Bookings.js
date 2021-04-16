import React from 'react'
import Navigation from "./Navigation";
import "./Account.css";

// import { ReactBooking } from "./react-booking";



function Bookings({ user, handleLogout, navv, setNav, setSignIn  }){
    return (
        <div className="account">

        <Navigation  navv={navv}
            setNav={setNav}
            handleLogout={handleLogout}
            setSignIn={setSignIn}/>
    
          <div className="account__body">
            <h1>Book An Appointment</h1>
            
    
        </div>
        </div>
      );
    }

export default Bookings;
