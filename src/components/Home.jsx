import React from 'react';
import Navbar from './Navbar';
import { Products } from './Products';

export const Home = () => {

    return (
        <div>
            <Navbar />
            <div className='text-center fs-2 mt-3'>
                <p>Home</p>
            </div>
            <Products />
        </div>
    )
}
