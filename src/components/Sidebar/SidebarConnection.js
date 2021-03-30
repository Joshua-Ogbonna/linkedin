import React from "react";
import Connection from "./Connection";
import "./SidebarConnection.css";

function SidebarConnection() {
  return (
    <div>
      <div className="connection__area">
        <h3 className="connection__heading">Recommended Profiles</h3>
        <Connection
          image={
            "https://pbs.twimg.com/profile_images/1343634476669267969/St7yhUjP_400x400.jpg"
          }
          name="Nonse Egemba"
          username="@aproko_doctor"
        />
        <Connection
          image={
            "https://i0.wp.com/pageone.ng/wp-content/uploads/2020/06/Dr-Olufunmilayo_Our_Fav_Nigerian_Doc-min-e1593520799412.jpg?fit=469%2C347&ssl=1"
          }
          name="Online Fav. Doctor"
          username="@dr_olufunmilayo"
        />
        <Connection
          image={
            "https://media-exp1.licdn.com/dms/image/C5603AQGFeqpOdzWuqQ/profile-displayphoto-shrink_200_200/0/1577568628813?e=1622073600&v=beta&t=3230ac9ptxzHbytdACVYKHEnW1rDkCaNxlzzd_unVFU"
          }
          name="Name cannot be blank"
          username="@hacksultan"
        />
        <Connection
          image={
            "https://stars.github.com/unicodeveloper.jpg"
          }
          name="Prosper Otemuyiwa"
          username="@unicodeveloper"
        />
      </div>
    </div>
  );
}

export default SidebarConnection;
