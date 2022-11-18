import React from 'react';
import { addToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import Navbar from './Navbar';

export const Home = () => {

    const dispatch = useDispatch();

    const product = {
        id: 1,
        name: 'Product 1'
    }

    return (
        <div>
            <Navbar />
            <div className='text-center mt-3'>
                <h3>Home Page</h3>
                <button
                    className='px-3 mt-3'
                    onClick={() => dispatch(addToCart(product))}
                >
                    Add to Cart
                </button>
            </div>

        </div>
    )
}
