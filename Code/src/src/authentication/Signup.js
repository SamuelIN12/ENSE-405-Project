import React from "react";
import "./SigninSignupReset.css";

function Signup({
  username,
  setUsername,
  emailRef,
  passwordRef,
  register,
  setSignUp,
  setSignIn,
}) {
  return (

  <section className="signup">
    <div className="loginContainer">
      
      <div className="name">  
            <h1>TAILORED DIET</h1>
            <br></br>
            </div> 

        <label>Name</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="username"
        />
        <label>Email</label>

        <input ref={emailRef}  type="email" />
        <label>Password</label>

        <input ref={passwordRef} type="password" />

        <div className="btnContainer">
        <button type="submit" onClick={register}>
          Sign Up
        </button>
        <h4>
          <p> Have an account?
          <span
            onClick={() => {
              setSignUp(false);
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

export default Signup;
