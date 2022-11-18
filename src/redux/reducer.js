import { ADD_TO_CART } from "./constants";

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducer called", action);
            return [action.data, ...data]
        default:
            return [];
    }
}