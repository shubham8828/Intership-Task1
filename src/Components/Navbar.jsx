import React from "react";
import "./Navbar.css";
import mern from "../icons/mern.png";
import react from "../icons/react.png";
import node from "../icons/node.png";
import mongodb from "../icons/mongodb.png";
import express from "../icons/express.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={mern} alt="MERN Stack Logo" />
        <Link to="/">
          <p>MERN Stack</p>
        </Link>
      </div>

      <ul className="menu-list">
        <li className="list-item">
          <Link to="/react">
            <img src={react} alt="React Logo" />
            React
          </Link>
        </li>
        <li className="list-item">
          <Link to="/node">
            <img src={node} alt="Node.js Logo" />
            Node
          </Link>
        </li>
        <li className="list-item">
          <Link to="/express">
            <img src={express} alt="Express Logo" />
            Express
          </Link>
        </li>
        <li className="list-item">
          <Link to="/mongo">
            <img src={mongodb} alt="MongoDB Logo" />
            Mongo
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
