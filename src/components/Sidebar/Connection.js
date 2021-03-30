import React from "react";
import "./Connection.css";
// import { A } from '@material-ui/core'

function Connection({ image, name, username }) {
  return (
    <div>
      
      <div className="profile__connect">
        <div className="connection__profile">
          <img src={image} alt="Connection profile imagge" />

          <div className="connection__details">
            <h5>{name}</h5>
            <p>{username}</p>
            
          </div>
        </div>
        <div className="connection__action">
          <i className="fas fa-plus"></i>
        </div>
      </div>
    </div>
  );
}

export default Connection;
