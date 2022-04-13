import React from 'react';
import { Link } from "react-router-dom";
import Style from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={Style.navbar}>
            <Link to="/" className={Style.link}>
                <h1 className={Style.logo}>Rick and Morty</h1>
            </Link>

        </div>
    );
}

export default Navbar;