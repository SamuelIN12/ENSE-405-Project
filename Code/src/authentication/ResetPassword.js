import React from "react";
import "./SigninSignupReset.css";
import { auth } from "../firebase";

function ResetPassword({ emailRef, setResetPass, setSignIn }) {
  const reset = (e) => {
    e.preventDefault();
    auth
      .sendPasswordResetEmail(document.getElementById("email").value)
      .then(function (user) {
        alert("Please check your email to reset your password");
      })
      .catch(function (e) {
        console.log(e);
      });
  };

  return (
    <section className="resetPassword">
      <div className="loginContainer">
      <div className="name">  
            <h1>TAILORED DIET</h1>
            <br></br>
            </div>              
            <label>Email</label>
        <input id="email"  type="email " />

        <div className="btnContainer">
        <button type="submit" onClick={reset}>
          Reset
        </button>
        <h4>
          <p>Remember your password?
          <span
            className="resetPassword__link"
            onClick={() => {
              setResetPass(false);
              setSignIn(true);
            }}
          >
            Sign In.
          </span>
          </p>
        </h4>
        </div>
    </div>
    </section>
  );
}

export default ResetPassword;
