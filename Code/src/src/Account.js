import React from "react";
import Navigation from "./Navigation";
import "./Account.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";



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

function Account({ user, handleLogout, navv, setNav, setSignIn }) {
  const classess = useStyless();

  return (
    <div className="account">

    <Navigation  navv={navv}
        setNav={setNav}
        handleLogout={handleLogout}
        setSignIn={setSignIn}/>

      <div className="account__body">
        <h1>My Account <h6>View your personal info below.</h6> </h1>
        
        
        <div className="account__avatar">
          <Avatar
            className={classess.large}
            alt={user.displayName} //display the first letter if no picture/
            src="/static/images/avatar/1.jpg"
          />
        </div>
        <div className="account__info">
        <div className="account__details">
      <h3>Name:</h3>
      <br></br>
      <br></br>
      <span> {user.displayName}</span>
      <br></br>
      <br></br>
      <br></br>
      <h3>Contact Email:  </h3> 
      <br></br>
      <br></br>
      <span> {user.email}</span>

      </div>
      </div>

    </div>
    </div>
  );
}

export default Account;
