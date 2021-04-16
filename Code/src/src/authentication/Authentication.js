import React from "react";
import "./SigninSignupReset.css";
import "./Authentication.css";

import Signin from "./Signin";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";

function Authentication({
  resetPass,
  setResetPass,
  signUpYes,
  setSignUp,
  signInYes,
  setSignIn,
  emailRef,
  passwordRef,
  username,
  setUsername,
  register,
  signIn,
}) {
  return (
    <div className="authentication">

      <div className="loginContainer">
        {signInYes ? (
          /* display the sign in screen if signInYes state is true */
          <Signin
            emailRef={emailRef}
            passwordRef={passwordRef}
            signIn={signIn}
            setSignIn={setSignIn}
            setResetPass={setResetPass}
            setSignUp={setSignUp}
          />
        ) : (
          <h12></h12>
        )}

        {signUpYes ? (
          /* else display the sign up screen if signUpYes state is true*/
          <Signup
            emailRef={emailRef}
            passwordRef={passwordRef}
            username={username}
            setUsername={setUsername}
            register={register}
            setSignIn={setSignIn}
            setSignUp={setSignUp}
          />
        ) : (
          <h12></h12>
        )}

        {resetPass ? (
          /* display the ResetPassword screen if resetPass state is true */
          <ResetPassword
            emailRef={emailRef}
            setResetPass={setResetPass}
            setSignIn={setSignIn}
          />
        ) : (
          <h12></h12>
        )}
      </div>
    </div>
  );
}

export default Authentication;
