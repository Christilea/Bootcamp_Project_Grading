import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar(props) {
return (
    <div className="navbar">
    <NavLink
        exact
        to="/"
        activeStyle={{
        fontWeight: "bold",
        color: "white",
        border: "1px solid white",
        }}
    >
        Home
    </NavLink>
    <NavLink
        to="/gradebook"
        activeStyle={{
        fontWeight: "bold",
        color: "white",
        border: "1px solid white",
        }}
    >
        Gradebook
    </NavLink>
    <NavLink
        to="/new"
        activeStyle={{
        fontWeight: "bold",
        color: "white",
        border: "1px solid white",
        }}
    >
        Enter a new grade
    </NavLink>
    {props.login ? (
        <span className="welcome">Welcome, {props.user} {" "}<button onClick={props.loginToggle}>Log out</button></span>
    ) : null}
    </div>
);
}