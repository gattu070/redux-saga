import React from 'react';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSaga/action';
import { checkOutCart } from '../redux/cartSaga/action';
import { useEffect } from 'react';

export const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartData);
    console.log(cart);

    let amount = cart.length && cart.map(item => item.price).reduce((prev, next) => prev + next);
    let discount = amount / 10;
    let tax = amount * 7 / 100;
    let total = amount - discount + tax;
    console.log("amount", amount);

    // useEffect(() => {
    //   dispatch()
    // }, [])

    return (
        <div className='Cart animate-in'>
            <Navbar />
            <div className="container animate__animated animate__fadeInUp">
                <h5 className='text-center pt-3 fs-2'>Cart</h5>

                <div className="row">
                    <div className="col-8">
                        <div className='card-wrapper pt-3'>
                            <div className="row justify-content-around gap-4">

                                {
                                    cart.map((cart, id) => {
                                        return <div key={id} className="card col-4 md:col-6 lg:col-4">
                                            <div className='title-bg'>
                                                <h5 className="card-title">{cart.name}</h5>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </div>
                                            <div className='main-card-body trans'>
                                                <div className='img-bg'>
                                                    <img src={require('../assets/images/' + cart.image)} className="card-img-top w-50 h-100 mx-auto" alt="..." />
                                                </div>
                                                {/* <hr /> */}
                                                <div className="card-body">
                                                    <p className="card-text mb-3">{cart.desc}</p>
                                                    <h4> <span>${cart.price}</span> <strike>${cart.oldprice}</strike></h4>
                                                    <div className="card-bottom d-flex justify-content-center align-items-center">
                                                        {/* <button
                                                className="btn btn-outline-primary"
                                                onClick={() => dispatch(addToCart(product))}
                                            >
                                                Add to cart
                                            </button> */}
                                                        {/* <i
                                                role='button'
                                                className="fa-regular fa-heart heart-icon"
                                            // onClick={() => props.addToWishHandler({ name: product.name, price: product.price, img: product.image, oldprice: product.oldprice, desc: product.desc })}
                                            >
                                            </i> */}
                                                        <div>
                                                            <button
                                                                className="removeBtn trans"
                                                                onClick={() => dispatch(removeFromCart(cart.id))}
                                                            >
                                                                Remove from cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    })
                                }

                            </div>
                        </div>
                    </div>

                    <div className={`${cart.length > 0 ? 'col-4' : 'col-8 mx-auto'} trans`} >
                        <div className="main-amount-section pt-3">
                            <table className="col-12 amount-table table align-middle">
                                {/* <thead className="table-light">
                                        <caption>Table Name</caption>
                                        <tr>
                                            <th>Column 1</th>
                                            <th>Column 2</th>
                                            <th>Column 3</th>
                                        </tr>
                                    </thead> */}
                                <tbody className="table-group-divider">
                                    <tr className="" >
                                        <td scope="row">Amount</td>
                                        <td className='text-end'>{amount ? amount : '0000'}</td>
                                    </tr>
                                    <tr className="">
                                        <td scope="row">Discount</td>
                                        <td className='text-end'>{discount ? discount : '0000'}</td>
                                    </tr>
                                    <tr className="">
                                        <td scope="row">Tax</td>
                                        <td className='text-end'>{tax ? tax : '0000'}</td>
                                    </tr>
                                    <tr className="fw-bold">
                                        <td scope="row">Total</td>
                                        <td className='text-end'>{total ? total : '0000'}</td>
                                    </tr>
                                </tbody>
                                <tfoot>

                                </tfoot>
                            </table>
                            <div className='col-12 checkout'>
                                <button
                                    className='checkout-btn'
                                    onClick={() => dispatch(checkOutCart())}
                                >CHECKOUT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
