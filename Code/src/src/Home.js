import React from "react";
import Verify from "./authentication/Verify";
import "./Home.css";
import Navigation from "./Navigation";

const Home = ({ user, handleLogout, setSignIn, setSignUp,navv,setNav }) => {
  return (
    <section className="home">
      
      {!user.emailVerified ? (
        <Verify setSignIn={setSignIn}
         setSignUp={setSignUp} />
      ) : (
        
        <>
        <Navigation
        navv={navv}
        setNav={setNav}
        handleLogout={handleLogout}
        setSignIn={setSignIn} />
        
          
       
          
          <section className="homeBackground">
            <div className="landing">
              <div className="name">
                <h1>Improve Your Health With Tailored Diet</h1>
                <h2>
                  Diet plans organized by certified deiticians that is health
                  specific
                </h2>
                <br></br>
              </div>
            </div>
          </section>
        </>
      )}
    </section>
  );
};

export default Home;
