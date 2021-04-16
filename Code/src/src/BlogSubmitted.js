import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import "./BlogSubmitted.css";
import Button from "@material-ui/core/Button";

function BlogSubmitted({ user, handleLogout, navv, setNav, setSignIn}) {
  return (
    <div className="blog">

       <Navigation  navv={navv}
            setNav={setNav}
            handleLogout={handleLogout}
            setSignIn={setSignIn}/>
      <div className="blogSubmitted">
      <h1>Blog Posted</h1>
      <div className="blogSubmitted__details">
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

        <h2>Thanks for sharing.</h2>
        <h3>You can view your blog post on the blogs page.</h3>
        <Button
          classes={{ label: "blogSubmitted__button" }}
          component={Link}
          to="/PostBlog"
        >
          Done
        </Button>
      </div>
    </div>
    </div>
  );
}

export default BlogSubmitted;
