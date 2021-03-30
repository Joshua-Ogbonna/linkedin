import React, { useState } from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/counter/userSlice";

function Login() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [profileLink, setProfileLink] = useState("");
  let [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            displayName: userAuth.user.displayName,
            uid: userAuth.user.uid,
            profileUrl: userAuth.user.photoURL,
            username: userAuth.user.username,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      alert("Hello, name is required!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profileLink,
            username: username,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profileLink,
                username: username,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login__section">
      <form className="login__form">
        <h2>
          link<span>health</span>
        </h2>
        <div className="form-groupp">
          <input
            type="text"
            placeholder="Full Name (Required if registering)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="url"
            placeholder="Profile Pics URL (Optional)"
            value={profileLink}
            onChange={(e) => setProfileLink(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username (If registering)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="login__button" onClick={loginToApp}>
          Sign In
        </Button>
        <p>
          Not a member?{" "}
          <span className="login__register" onClick={register}>
            Register Now.
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
