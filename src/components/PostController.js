import React, { useEffect, useState } from "react";
import Posts from "../components/Posts/Posts";
import AddPost from "./Posts/AddPost";
import { db } from "../firebase/firebase";
// import Avatar from "@material-ui/core/Avatar"
import FlipMove from 'react-flip-move'

function PostController() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('date', 'desc').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      console.log(posts);
    });
  }, []);
  return (
    <div>
      <AddPost />

      <FlipMove>

        {posts.map(
          ({
            id,
            data: { userImage, name, username, date, postContent, postImage },
          }) => (
            <Posts 
            key={id}
            image={userImage}
            name={name}
            username={username}
            // date={date}
            postContent={postContent}
            postImage={postImage}
            />
          )
        )}
      </FlipMove>


      {/* <Posts
        image={
          "https://www.who.int/images/default-source/infographics/who-emblem.png?sfvrsn=877bb56a_2"
        }
        name="Who Health Organization"
        username="@who"
        date="23-08-2021"
        postContent="If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you live and work. Do it all!"
        postImage={
          "https://www.who.int/images/default-source/health-topics/coronavirus/tile_prepare_your_space_self_isolation_5_3.tmb-1920v.jpg?sfvrsn=2f582150_1"
        }
      />

      <Posts
        // image={
        //   "https://www.who.int/images/default-source/infographics/who-emblem.png?sfvrsn=877bb56a_2"
        // }
        name="Who Health Organization"
        username="@who"
        date="23-08-2021"
        postContent="The most important actions to take during a heat-wave are: to avoid or reduce exposure, to communicate risks effectively, to take particular care of vulnerable population groups and to manage mild and severe heat illness."
      /> */}
    </div>
  );
}

export default PostController;
