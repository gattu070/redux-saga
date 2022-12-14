import React from 'react';
import { addToCart } from '../redux/cartSaga/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { proList } from '../redux/productSaga/productAction';
import { useEffect } from 'react';

export const Products = (props) => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.productList);
    console.log(data);

    useEffect(() => {
        dispatch(proList())
    }, [])


    return (
        <div className='Products animate-in'>
            <div className="container animate__animated animate__fadeInUp">

                <div className='card-wrapper pt-3'>
                    <div className="row justify-content-around gap-4">

                        {
                            data.map((product, id) => {
                                return <div key={id} className="card col-12 md:col-6 lg:col-4">
                                    <div className='title-bg trans'>
                                        <h5 className="card-title">{product.name}</h5>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                    <div className='main-card-body trans'>
                                        <div className='img-bg'>
                                            <img src={require('../assets/images/' + product.image)} className="card-img-top w-50 h-100 mx-auto" alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text mb-3">{product.desc}</p>
                                            <h4> <span>${product.price}</span> <strike>${product.oldprice}</strike></h4>
                                            <div className="card-bottom d-flex justify-content-between align-items-center">
                                                <button
                                                    className="addBtn trans"
                                                    onClick={() => dispatch(addToCart(product))}
                                                >
                                                    Add to cart
                                                </button>
                                                <i
                                                    role='button'
                                                    className='fa-regular fa-heart heart-icon'
                                                >
                                                </i>
                                            </div>
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
