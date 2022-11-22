import React from 'react';
import { productList } from '../assets/data/products_list';
import { addToCart } from '../redux/action';
import { useDispatch } from 'react-redux';

export const Products = (props) => {

    const dispatch = useDispatch();

    return (
        <div className='Products animate-in'>
            <div className="container animate__animated animate__fadeInUp">
                <h5 className='text-center pt-3'>Products</h5>

                <div className='card-wrapper pt-3'>
                    <div className="row justify-content-around gap-4">

                        {
                            productList.map((product, id) => {
                                return <div key={id} className="card col-12 md:col-6 lg:col-4">
                                    <div className='title-bg'>
                                        <h5 className="card-title">{product.name}</h5>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                    <div className='img-bg'>
                                        <img src={product.image} className="card-img-top w-50 h-100 mx-auto" alt="..." />
                                    </div>
                                    {/* <hr /> */}
                                    <div className="card-body">
                                        <p className="card-text mb-3">{product.desc}</p>
                                        <h4> <span>${product.price}</span> <strike>${product.oldprice}</strike></h4>
                                        <div className="card-bottom d-flex justify-content-between align-items-center">
                                            <button
                                                className="btn btn-outline-primary"
                                                onClick={() => dispatch(addToCart({ name: product.name, price: product.price, img: product.image, oldprice: product.oldprice, desc: product.desc, quantity: product.quantity }))}
                                            >
                                                Add to cart
                                            </button>
                                            {/* <AiOutlineHeart className='heart-icon' /> */}
                                            <i
                                                role='button'
                                                className="fa-regular fa-heart heart-icon"
                                                // onClick={() => props.addToWishHandler({ name: product.name, price: product.price, img: product.image, oldprice: product.oldprice, desc: product.desc })}
                                            >
                                            </i>
                                        </div>
                                    </div>
                                </div>

                            })
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}
