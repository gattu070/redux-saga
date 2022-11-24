import { ADD_TO_CART, REMOVE_FROM_CART , CHECKOUT_CART } from '../constant'

export const checkOutCart = (data) => {
    console.log("cart list action",data);
    return {
        type: CHECKOUT_CART,
        data
    }
}

export const addToCart = (data) => {
    console.log("add to cart action");
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeFromCart = (id) => {
    console.log("remove from cart action");
    return {
        type: REMOVE_FROM_CART,
        id
    }
}