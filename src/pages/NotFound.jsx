import React from "react";
import NotFoundImg from "../assets/img/not-found.jpeg";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>Pokemon not found :c</h1>
            <img src={NotFoundImg} alt="" />
        </div>
    );
};

export default NotFound;
