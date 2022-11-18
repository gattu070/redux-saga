import React from 'react';
import { Link } from "react-router-dom";
import { BubblyLink } from "react-bubbly-transitions";
import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { useLocation } from "react-router-dom";

import "animate.css/animate.css";

function Navbar(props) {

    const [navbar, setNavbar] = useState(false);
    const pathname = useLocation().pathname;

    // console.log("nav", props.data.length);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark animate__animated animate__fadeInDown">
            <div className="container">
                <BubblyLink to='/'>
                    <span className={`navbar-brand`}>iShopper</span>
                </BubblyLink>
                {/* <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <button
                    className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"
                    onClick={() => setNavbar(!navbar)}
                >
                    <Hamburger
                        role='button'
                        color='#ffffff'
                        direction="right"
                        size={25}
                    />
                </button>
                <div className={`collapse navbar-collapse ${navbar ? "text-center" : ""}`} id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <BubblyLink to='/'>
                            <li className={`nav-item ${navbar ? 'animate__animated animate__fadeInLeft first' : ''}`}>
                                <span className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</span>
                            </li>
                        </BubblyLink>
                        <BubblyLink to='/cart'>
                            <li className={`nav-item position-relative ${navbar ? 'animate__animated animate__fadeInLeft sec' : ''}`}>
                                <div className={`nav-link ${pathname === '/cart' ? 'active' : ''}`}>
                                    <span className=""><i className="fa-solid fa-cart-shopping fs-5"></i></span>
                                    {/* <span className={`${props.data.length > 0 ? 'd-inline-block' : 'd-none'} cart-count text-white bg-danger rounded-circle px-1 py-0`}>{props.data.length}</span> */}
                                </div>
                            </li>
                        </BubblyLink>
                    </ul>
                    <div className={`d-flex justify-content-center my-2 my-lg-0 ${navbar ? 'animate__animated animate__fadeInLeft thir' : ''}`}>
                        <input className="form-control bg-dark text-white me-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;