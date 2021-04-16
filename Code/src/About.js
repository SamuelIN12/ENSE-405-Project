import React from 'react'
import Navigation from "./Navigation";
import "./Home.css";



const About = ({ user, handleLogout, navv, setNav, setSignIn }) => {
    return (
        <section className="home">

        <>
        <Navigation  navv={navv}
            setNav={setNav}
            handleLogout={handleLogout}
            setSignIn={setSignIn}/>
    
            <section className="homeBackground">
            <div className="landing">
              <div className="name">
                <h1>About Tailored Diet</h1>
                <br></br>

                <h2>
                At Tailored Diet we aim to improve the health and well-being of every individual living with any health conditions.
                </h2>
                <br></br>
                <h2>
                Tailored Diet works with an extended team of medical health experts, to develop accurate and effective diet plans 
                available to everyone with any health conditions, that will also sync with their medications.
                </h2>
                <br></br>
                <h2>
                Tailored Diet exists to give individuals a space where they feel safe to share their experiences living with certain health conditions, as well as the support they need to prioritize their health and well-being. 
                </h2>
                <br></br>
              </div>
            </div>
          </section>
          </>
          </section>
      );
    };
export default About;
