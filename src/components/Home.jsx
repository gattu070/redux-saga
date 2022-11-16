import React from 'react';
import { addToCart } from "../redux/action";
import { useDispatch } from "react-redux";

export const Home = () => {

    const dispatch = useDispatch();

    const products = [
        {
            id: 1,
            name: 'Product 1',
        }
    ]

    return (
        <div className='d-flex justify-content-center mt-5'>
            <button
                className='px-3'
                onClick={() =>
                    dispatch(addToCart(products))
                }
            >
                Add to Cart
            </button>
        </div>
    )
}
