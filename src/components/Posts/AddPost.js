import React, { useState } from "react";
import "./AddPost.css";
import { Button } from '@material-ui/core'

import { db } from "../../firebase/firebase";
import firebase from 'firebase'
import { selectUser } from "../../features/counter/userSlice";
import { useSelector } from "react-redux";

function AddPost() {
  const user = useSelector(selectUser)
  let [input, setInput] = useState('')
  const sendPost = (e) => {
      e.preventDefault()
      
      db.collection('posts').add({
          name: user.displayName,
          username: user.username || user.displayName,
          userImage: user.profileUrl || "",
          postContent: input,
          postImage: '',
          date: firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput('')
  };

  return (
    <div className="add__post">
      <form className="post__form" onSubmit={() => sendPost()}>
        <div className="form-group">
          <textarea
            cols="30"
            rows="2"
            className="form-control"
            placeholder="write a post"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        <Button onClick={sendPost}>Submit</Button>
        </div>
        <div className="post__option">
          <i className="far fa-image"></i>
          <i className="far fa-images"></i>
          <i className="fas fa-video"></i>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
