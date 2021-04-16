import React, { useState } from "react";
import "./Navigation.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Input } from "@material-ui/core";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";


// Styling for modal. Code from material-ui.com*/
function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 350,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
}));

const useStyless = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));


function Navigation({ setNav,navv,handleLogout }) {

    const classess = useStyless();
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [openModal, setOpenModal] = useState(false);
  const [openAuthorizedModal, setOpenAuthorizedModal] = useState(false);
  const [code, setCode] = useState("");

    const Expert = (event) => {
        event.preventDefault(); //avoid refresh
        {
          code == "123" ? (
            //is the authorization code  equal to 1?
            //display the authorized modal
            <>({(setOpenModal(false), setNav(true), setOpenAuthorizedModal(true))})</>
          ) : (
            //else show alert message
            alert("The authorization code is incorrect")
          );
        }
      };
    
    
  return (
    <section className="navigation">
    {navv?
      (
        <>
       
        <div className="navigation__two">
          <nav>
            <h2>Tailored Diet</h2>
  
            <Button
              classes={{ label: "navigation__Button" }}
              component={Link}
              to="/"
              onClick={() => {
                // setSignUp(true);
                setNav(false)
              }}
            >
              <h2>User Home</h2>
            </Button>
  
            {/* <Button
              classes={{ label: "navigation__Button" }}
              component={Link}
              to="/ManageBookings"
            >
              <h2>My Bookings</h2>
            </Button>
   */}
            <Button
              classes={{ label: "navigation__Button" }}
              component={Link}
              to="/PostBlog"
            >
              <h2>Post Blog</h2>
            </Button>
            
            
            <div class="dropdown">
              <button class="dropbtn__two">
                <h3>Profile</h3>
              </button>
              <div class="dropdown-content">
                <a>
                  <Button
                    classes={{ label: "navigation__Button" }}
                    component={Link}
                    to="/Account"
                  >
                    My Account
                  </Button>
                </a>
  
                <a>
                  <Button
                    component={Link}
                    onClick={handleLogout}
                    classes={{ label: "navigation__Button" }}
                  >
                    Logout
                  </Button>
                </a>
              </div>
            </div>
  
            {/* <button onClick={handleLogout}>Logout</button> */}
          </nav>
        </div>
      
      </>
      ):(
        <>
       
      <div>
        <nav>
          <h2>Tailored Diet</h2>

          <Button
            classes={{ label: "navigation__Button" }}
            component={Link}
            to="/"
          >
            <h2>Home</h2>
          </Button>

          {/* <Button
            classes={{ label: "navigation__Button" }}
            component={Link}
            to="/Bookings"
          >
            <h2>Book Online</h2>
          </Button> */}

          <Button
            classes={{ label: "navigation__Button" }}
            component={Link}
            to="/Blogs"
          >
            <h2>Blogs</h2>
          </Button>

          <Button
            classes={{ label: "navigation__Button" }}
            component={Link}
            to="/About"
          >
            <h2>About</h2>
          </Button>
          
          
          <div class="dropdown">
            <button class="dropbtn">
              <h3>Profile</h3>
            </button>
            <div class="dropdown-contenttwo">
              <a>
                <Button
                  classes={{ label: "navigation__Button" }}
                  component={Link}
                  to="/Account"
                >
                  My Account
                </Button>
              </a>

              <a>
                <Button
                  classes={{ label: "navigation__Button" }}
                  onClick={() => setOpenModal(true)}
                >
                  Expert
                 
                </Button>
              </a>
              
              <a>
                <Button
                  component={Link}
                  onClick={handleLogout}
                  classes={{ label: "navigation__Button" }}
                >
                  Logout
                </Button>
              </a>
            </div>
          </div>

          {/* <button onClick={handleLogout}>Logout</button> */}
        </nav>
      </div>
   
        </>
      )} 
          <Modal
          open={openModal} //state to keep track if its open
          onClose={() => setOpenModal(false)} //onClose method. closes the modal when anywhere else on the screen is clicked
        >
          <div style={modalStyle} className={classes.paper}>
            <div className="settings__code">
              
              <VpnKeyOutlinedIcon />
              <Input
                onChange={(e) => setCode(e.target.value)}
                placeholder="Authorization Code"
              />
              <button onClick={Expert} className="settings__submitButton">
                Submit
              </button>
            </div>
          </div>
        </Modal>

        <Modal
          open={openAuthorizedModal} //state to keep track if its open
          onClose={() => setOpenAuthorizedModal(false)} //onClose method. closes the modal when anywhere else on the screen is clicked
        >
<           div style={modalStyle} className={classes.paper}>
            <div className="settings__code">
              <center>
                {/* checkmark */}
                <svg
                  class="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    class="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    class="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
                <h2>Access Granted</h2>
              </center>

              {/* Continue Button */}
              <Button
                classes={{ label: "settings__submitButton" }}
                component={Link}
                to="/PostBlog"
              >
                Continue
              </Button>
            </div>
          </div>
        </Modal>
        
    </section>
  );
}

export default Navigation;
