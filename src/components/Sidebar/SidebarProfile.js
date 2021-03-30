import React from "react";
import "./Sidebar.css";
import {  } from '@material-ui/core'
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
// import AccountIcon from "@material-ui/icons/AccountCircle"
import Avatar from "@material-ui/core/Avatar"

function SidebarProfile() {
  const user = useSelector(selectUser)
  return (
    <div>
      <div className="profile">
        {
          user.photoURL ? 
            <img src={user.profileUrl} alt="Profile Image"/>
            :
          (<Avatar> {user.displayName[0]} </Avatar>)
        }
        
        <div className="profile__name">
          <h3>{user.displayName}</h3>
          <p>@{user.username ? user.username : user.displayName}</p>
        </div>
        {/* Stats section */}
        <div className="profile__stats">
            <p> 1200 followers </p>
            <p> 80 following </p>
            <p> <i className="fas fa-users"></i> View Connections </p>
            <p> <i className="far fa-save"></i> Saved Items </p>
        </div>

        <hr/>   

        <div className="profile__connection">
            <p> <i className="fas fa-users-slash"></i> Communities </p>
            <p> <i className="fab fa-slack-hash"></i> Hashtags </p>
            <p> <i className="fas fa-rocket"></i> Spaces </p>
        </div>
      </div>

    </div>
  );
}

export default SidebarProfile;
