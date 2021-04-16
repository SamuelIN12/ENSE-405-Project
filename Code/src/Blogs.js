import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import "./Account.css";
import "./Blogs.css";
import Post from "./Post";
import { db } from "./firebase";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 100,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function Blogs({ user, handleLogout, navv, setNav, setSignIn }){

  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = React.useState("");
  const [openDropDown, setOpenDropDown] = React.useState(false);
  const classes = useStyles();
  const handleChangeDropDown = (event) => {
    setKeyword(event.target.value);
  };

  const noFilter = (event) => {
    db.collection("posts")
      .where("status", "==", "Approved")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //everytime a new post is added, this code fires...
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id, //the post ids
            post: doc.data(),
          }))
        );
      });
  };

  useEffect(() => {
    //this is where the code runs
    //snapshot is a powerful listener that will run the code when a post is made
    db.collection("posts")
      // .where("status", "==", "Approved")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //everytime a new post is added, this code fires...
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id, //the post ids
            post: doc.data(),
          }))
        );
      });
  }, []); //[] symbol means run the code once;

    return (
        <div className="account">

        <Navigation  navv={navv}
            setNav={setNav}
            handleLogout={handleLogout}
            setSignIn={setSignIn}/>
    
          <div className="account__body">
            <h1>Blogs</h1>
            <div className="homePage__posts">
              <center>
            {
            /*loop through posts in state*/
            posts.map(({ id, post }) => (
              //the key allows the page to only refresh the new post, not all the posts. since each post has its own key
              <Post
                key={id}
                postId={id}
                user={user}
                username={post.username}
                caption={post.caption}
                topic={post.topic}
                imageUrl={post.imageUrl}
                timestamp1={post.timestamp}
              ></Post>
            ))
          }
          </center>
          </div>
    
        </div>
        </div>
      );
    }

export default Blogs;
