import React from "react";
import "./SigninSignupReset.css";
import Signin from "./Signin";
import { Button } from "@material-ui/core";
import { auth } from "../firebase";

const Verify = ({ setSignIn, setSignUp }) => {
  return (
    <section className="resetPassword">
      <div className="loginContainer">
        <div className="name">
          <h2>
            Please check your email and click the link to verify your account
          </h2>
          <br></br>
        </div>

        <div className="btnContainer">
          <button
            type="submit"
            onClick={() => {
              setSignIn(true);
              setSignUp(false);
              auth.signOut();
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    </section>
  );
};

export default Verify;
