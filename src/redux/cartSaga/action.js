import { ADD_TO_CART, REMOVE_FROM_CART , CART_LIST } from '../constant'

export const cartList = (data) => {
    console.log("cart list action",data);
    return {
        type: CART_LIST,
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