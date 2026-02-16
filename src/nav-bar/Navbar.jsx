import React from "react";
import "./Navbar.css";

function Navbar() {
    return (

        <div className="nav">
            <div id="brand">
                <h1>Dude's Mart</h1>
            </div>
            <div id="links">
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Profile</a>
                <a href="">ContactUs</a>
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


