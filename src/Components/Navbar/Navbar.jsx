import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
import { useState } from 'react';


export default function Navbar() {

        const [activeLink, setActiveLink] = useState('');
    
    function activate(link) {
        setActiveLink(link);
    }   
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-main fixed-top p-3">
                <div className="container">
                    <Link onClick={()=>activate("")}  to="/" className="navbar-brand text-white text-uppercase fs-2 fw-bold" href="#">start Framework</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link onClick={()=>activate("about")} to="/About" className={`nav-link  text-white rounded-2 me-2  text-uppercase fs-6 fw-semibold ${activeLink === "about" ? "active" : ""} `} aria-current="page" href="#">About</Link>
                            </li>

                            <li className="nav-item ">
                                <Link onClick={()=>activate("portfolio")} to="/Portfolio" className={`nav-link text-white rounded-2 me-2 text-uppercase  fs-6 fw-semibold ${activeLink === "portfolio" ? "active" : ""} `} href="#">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={()=>activate("contact")} to="/Contact" className={`nav-link text-white rounded-2 me-2  text-uppercase   fs-6 fw-semibold ${activeLink === "contact" ? "active" : ""} `} href="#">Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}
