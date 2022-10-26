import React from "react";
import { FaCoins } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <Link excat to="/">
      <div className="navbar">
        <FaCoins
          className="coin"
          style={{ height: "2.3em", width: "2.3em", color: "white" }}
        ></FaCoins>
        <h1>
          Coin: <span className="white">Search</span>{" "}
        </h1>
      </div>
    </Link>
  );
};
