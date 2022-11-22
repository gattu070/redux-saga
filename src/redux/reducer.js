import { ADD_TO_CART } from "./constant";

const initialSate = {
    cardData: []
}

export const cartData = (data = [], action) => {
    console.log("reducer called", action);
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...data,
                action.data
            ];
        default:
            return data;
    }
}