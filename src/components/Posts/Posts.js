import React, { forwardRef } from "react";
import "./Post.css";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Avatar from "@material-ui/core/Avatar"

const Posts = forwardRef(({ image, name, username, date, postContent, postImage }, ref) => {
  return (
    <div className="post" ref={ref}>
      <div className="post__area">
        <div className="post__personal">
          { image ? <img src={image} alt="user image" /> : <Avatar className="account__icon"> {name[0]} </Avatar>}
          

          <div className="postPersonal__details">
            <div className="name__username">
              <h5> {name} </h5>
              <p> @{username ? username : name.split(" ")[0]} </p>
            </div>

            
          </div>
        </div>
        <p> {postContent} </p>

        {postImage && <img src={postImage} alt="Post Image" className="img-fluid" />}
        <div className="post__date">{date}</div>  
        <div className="post__actions">
          <span><i class="fas fa-heart"></i> Like</span>
          <span><i class="far fa-comment-alt"></i> Comment</span>
          <span> <i class="fas fa-share-alt"></i> Share</span>
        </div>
      </div>
    </div>
  );
})

export default Posts;
