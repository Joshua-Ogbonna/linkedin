import React from "react";
import "./Header.css";

function Header() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            linkhealth
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <form className="header__form">
              <i className="fas fa-search"></i>
              <input
                className="header__search"
                type="search"
                placeholder="search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                <i className="fas fa-home me-1"></i>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i className="far fa-comments me-1"></i>
                  Communities
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i className="fas fa-user-md me-1"></i>
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i className="far fa-envelope me-1"></i>
                  Messages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i className="fas fa-dot-circle me-1"></i>
                  Notifications
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
