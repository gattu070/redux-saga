import { ADD_TO_CART } from "./constants";

export const addToCart = (data) => {
    console.log('action called',data);
    return {
        type : ADD_TO_CART,
        data: data
    }
} 