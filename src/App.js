import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login";
import PostController from "./components/PostController";
import SidebarConnection from "./components/Sidebar/SidebarConnection";
import SidebarProfile from "./components/Sidebar/SidebarProfile";
import { selectUser } from "./features/counter/userSlice";

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      <Header />

      {!user ? (<Login />) :
      
        (<div className="main__body">
          <div className="container">
            <div className="row">

              {/* Sidebar Container */}
              <div className="col-lg-3 profile__section">
                <SidebarProfile />
              </div>

              {/* Linkhealth tweets and posts container */}
              <div className="col-lg-6 post__section">
                
                <PostController />
                
              </div>

              {/* Trends and Profiles */}
              <div className="col-lg-3">
                <SidebarConnection />
              </div>
            </div>
          </div>
        </div>)
      }

    </div>
  );
}

export default App;
