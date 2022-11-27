import React from 'react';
import { BubblyLink } from "react-bubbly-transitions";
import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { proSearch } from '../redux/productSaga/productAction';
import { CiSearch } from 'react-icons/ci';
import { HiHome } from 'react-icons/hi';
import { Tooltip } from '@material-ui/core';
import { Fade } from '@mui/material';
import "animate.css/animate.css";

function Navbar() {

    const dispatch = useDispatch();
    const [navbar, setNavbar] = useState(false);
    const pathname = useLocation().pathname;
    const res = useSelector((state) => state.cartData);
    console.log(res, 'redux');
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark animate__animated animate__fadeInDown">
            <div className="container">
                <BubblyLink to='/'>
                    <span className={`navbar-brand`}>
                        <img src={require("../assets/images/logo/3.png")} className="logo" alt="" />
                    </span>
                </BubblyLink>
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
                    <Tooltip
                        title='SEARCH'
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                    >
                        <div className={`SearchBar position-relative my-2 my-lg-0 ${navbar ? 'animate__animated animate__fadeInLeft thir' : ''}`}>
                            <CiSearch className='search-icon' />
                            <input
                                className="form-control bg-dark text-white me-sm-2 trans"
                                type="text"
                                placeholder="Search"
                                onChange={(event) => dispatch(proSearch(event.target.value))}
                            />
                        </div>
                    </Tooltip>
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <BubblyLink to='/'>
                            <Tooltip
                                title='HOME'
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                            >
                                <li className={`nav-item ${navbar ? 'animate__animated animate__fadeInLeft first' : ''}`}>
                                    <span className={`nav-link home-link ${pathname === '/' ? 'active' : ''}`}><HiHome className='home-icon fs-5' /></span>
                                </li>
                            </Tooltip>
                        </BubblyLink>
                        <BubblyLink to='/cart'>
                            <Tooltip
                                title='CART'
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 600 }}
                            >
                                <li className={`nav-item position-relative ${navbar ? 'animate__animated animate__fadeInLeft sec' : ''}`}>
                                    <div className={`nav-link ${pathname === '/cart' ? 'active' : ''}`}>
                                        <span className='d-flex align-items-center'><i className="fa-solid fa-cart-shopping"></i></span>
                                        <span className={`${res.length > 0 ? 'd-inline-block' : 'd-none'} cart-count text-white bg-danger rounded-circle px-1 py-0`}>{res.length}</span>
                                    </div>
                                </li>
                            </Tooltip>
                        </BubblyLink>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;