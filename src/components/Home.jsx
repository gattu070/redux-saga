import React from 'react';
import Navbar from './Navbar';
import { Products } from './Products';

export const Home = () => {

    return (
        <div className='Home'>
            <Navbar />
            <div className='text-center fs-2 mt-3 animate__animated animate__fadeInUp'>
                <p>Home</p>
            </div>
            <Products />
        </div>
    )
}
