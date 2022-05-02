import React from "react";
import {Link} from "react-router-dom"
import "./Navigation.css"

function Navigation() {
    return(
        <div className="nav">
            <div class="nav_inner">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Navigation;