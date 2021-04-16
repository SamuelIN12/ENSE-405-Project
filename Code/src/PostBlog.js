import React, { useState } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import "./Account.css";
import "./PostBlog.css";
import firebase from "firebase";
import { storage, db } from "./firebase";
import { Button } from "@material-ui/core";




function PostBlog({ user, handleLogout, navv, setNav, setSignIn}) {

  const [caption, setCaption] = useState("");
  const [topic, setTopic] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = React.useState(""); //state to keep track of post status
  const handleChange = (e) => {
    //handleChange function fires off an event
    if (e.target.files[0]) {
      //get the first file you selected
      setImage(e.target.files[0]); //set the image in state to that file
    }
  };


  const handleUpload = () => {
    //access the storage in firebase, get a references to the folder images/ and store image there
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      /*provide snapshot of the image uploading progress via an equation*/
     
      
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL() //GET DOWNLOAD LINK TO THE IMAGE
          .then((url) => {
            //post image inside db
            db.collection("posts").add({
              //get server timestamp so images are sorted by time posted
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              topic: topic,
              imageUrl: url,
              username: user.displayName,
              // keyword: keyword,
            });

            // setProgress(0); //reset progress
            setCaption("");
            setTopic("");
            setImage(null);
            // setKeyword("");
          });
      }
    );
  };
  
  const style = {
    //maxHeight:'150px',
    minHeight:'200px',
    width: "100%",
      resize:'none',
      padding:'9px',
      boxSizing:'border-box',
      fontSize:'15px'};

    return (
        <div className="account">

        <Navigation  navv={navv}
            setNav={setNav}
            handleLogout={handleLogout}
            setSignIn={setSignIn}/>
    
          <div className="account__body">
            <h1>Post a Blog</h1>
            <div className="postPage__details">

        <textarea
        // style={style} 
          type="text"
          placeholder="Your topic..."
          onChange={(event) => setTopic(event.target.value)}
          value={topic}
        />
        <br></br>
        <textarea
        style={style} 
          type="text"
          placeholder="Write your blog post here..."
          onChange={(event) => setCaption(event.target.value)}
          value={caption}
        />
        
        <input
          type="file"
          className="postPage__buttonInput"
          onChange={handleChange}
        />

        <Button
          classes={{ label: "postPage__image" }}
          onClick={handleUpload}
          component={Link}
          to="/PostBlog/BlogSubmitted"
        >
          Post Blog
        </Button>
      </div>
    </div>
    
        </div>
      );
    }

export default PostBlog;