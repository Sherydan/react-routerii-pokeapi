import React from "react";
import pokeball from "../assets/img/pokeball.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-container">
                <img src={pokeball} alt="" id="brand" />

                <div className="nav-links">
                    <NavLink className={({ isActive }) =>isActive ? "active" : "no-active"} to="/"end>Home</NavLink>
                    <NavLink className={({ isActive }) =>isActive ? "active" : "no-active"} to="/pokemon">Pokemon</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
