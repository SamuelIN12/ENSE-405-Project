import React from "react";
import "./SigninSignupReset.css";

const Signin = ({
  signIn,
  emailRef,
  passwordRef,
  setSignIn,
  setResetPass,
  setSignUp,
}) => {
  return (
    <section className="signin">
      <div className="loginContainer">
        <div className="name">
          <h1>TAILORED DIET</h1>
          <br></br>
        </div>
        <label>Email</label>
        <input ref={emailRef} type="text" id="email" />
        <label>Password</label>

        <input ref={passwordRef} type="password" id="password" />

        <div className="btnContainer">
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
          <h4>
            <p>
              Don't have an account?
              <span
                onClick={() => {
                  setSignUp(true);
                  setSignIn(false);
                }}
              >
                Sign Up
              </span>
            </p>
            <p>
              {" "}
              Forgot your password?
              <span
                onClick={() => {
                  setResetPass(true);
                  setSignIn(false);
                }}
              >
                Reset here
              </span>
            </p>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Signin;
