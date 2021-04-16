import React, { useEffect, useState, useRef } from "react";
import Authentication from "./authentication/Authentication";
import Home from "./Home";
import Account from "./Account";
import Blogs from "./Blogs";
import About from "./About";
import BlogSubmitted from "./BlogSubmitted";
import Bookings from "./Bookings";
import ManageBooking from "./ManageBooking";
import PostBlog from "./PostBlog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null); //state to keep track of the user
  const [username, setUsername] = useState("");
  const [resetPass, setResetPass] = useState(false); //state to check if the user wants to reset password
  const [signInYes, setSignIn] = useState(true); // state to check if the user wants to sign in
  const [signUpYes, setSignUp] = useState(false); //state to check if the user wants to sign up
  const [navv, setNav] = useState(false); //state to check if the user wants to sign up
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    //listener for any authentication state change
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user has logged in..
        console.log(authUser); //check the console if someone is logged in
        setUser(authUser); //cookie tracking to keep you logged in

        if (authUser.displayName) {
          //dont update the username if they dont have a display name
        } else {
          //if we just created someone...
          return authUser.updateProfile({
            displayName: username, //set the display name in firebase
          });
        }
      } else {
        //user logged out...
        setUser(null);
      }
    });
    return () => {
      //perform some cleanup actions before restarting useEffect to avoid
      //duplicate listeners
      unsubscribe();
    };
  }, [user, username]);

  //function "register" is fired up when the user tries to sign up
  const register = (e) => {
    e.preventDefault(); //prevent refresh when button is clicked

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value, //get the email value typed
        passwordRef.current.value //get the password
      )
      //send Email verification
      .then(
        function (authData) {
          authData.user.sendEmailVerification();
        },
        //if email wasnt sent
        function (error) {
          //An error happened
          alert(error.message);
        }
      )

      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="app">
      {user ? (
        <Switch>
          {/* Route for home page */}

          <Route exact path="/">
            <Home
              setSignIn={setSignIn}
              setSignUp={setSignUp}
              handleLogout={handleLogout}
              user={user}
              navv={navv}
              setNav={setNav}
              setSignIn={setSignIn}
            />
          </Route>

          {/* Route for account page */}
          <Route exact path="/Account">
            <Account handleLogout={handleLogout} user={user} navv={navv}
              setNav={setNav} />
          </Route>

          <Route exact path="/ManageBookings">
            <ManageBooking handleLogout={handleLogout} user={user} navv={navv}
              setNav={setNav}/>
          </Route>

          <Route exact path="/PostBlog">
            <PostBlog handleLogout={handleLogout} user={user} navv={navv}
              setNav={setNav}/>
          </Route>

          <Route exact path="/Bookings">
            <Bookings handleLogout={handleLogout} user={user} navv={navv}
              setNav={setNav}/>
          </Route>

          <Route exact path="/PostBlog/BlogSubmitted">
                <BlogSubmitted />
          </Route>

          <Route exact path="/About">
            <About handleLogout={handleLogout} user={user} navv={navv}
              setNav={setNav}/>
          </Route>

          <Route exact path="/Blogs">
            <Blogs handleLogout={handleLogout} user={user} navv={navv}
              setNav={setNav}/>
          </Route>

        </Switch>
      ) : (
        //does the user exist? show app
        // <div>
        /* display the navigation bar if the user exists */

        /* <Switch>
              {/* <Route exact path="/">
                <Home
                  user={user}
                  username={username}
                />
              </Route> */

        /* <Route exact path="/Home">
                <Home
                  user={user}
                  username={username}
                  
                />
              </Route>

              

              

              

              

              
            </Switch> */
        /* </div>  */

        //else show authentication screen
        <Authentication
          signUpYes={signUpYes}
          setSignUp={setSignUp}
          signInYes={signInYes}
          setSignIn={setSignIn}
          signIn={signIn}
          register={register}
          setUsername={setUsername}
          username={username}
          emailRef={emailRef}
          passwordRef={passwordRef}
          resetPass={resetPass}
          setResetPass={setResetPass}
        />
      )}
    </div>
  );
}

export default App;