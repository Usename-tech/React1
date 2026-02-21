import React from "react";
import "./Navbar.css";

function Navbar() {
    return (

        <div className="nav">
            <div id="brand">
                <h1>Dude's Mart</h1>
            </div>
            <div id="links">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/profile">Profile</a>
                <a href="/contact">ContactUs</a>
                <a href="/sign-in">Sign-In</a>
                <a href="/sign-up">Sign-Up</a>
            </div>
            <div id="icons">
                <i style={{ fontSize: "21px" }} className="bi bi-person-circle"></i>
                <i style={{ fontSize: "21px" }} className="bi bi-suit-heart-fill"></i>
                <button>Logout</button>
            </div>
        </div>



    );
}

export default Navbar;


