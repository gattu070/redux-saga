import { ADD_TO_CART, CHECKOUT_CART, REMOVE_FROM_CART } from "../constant";

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...data,
                action.data
            ];
        case REMOVE_FROM_CART:
            // data.length = data.length ? data.length - 1 : [];
            const remainingItem = data.filter((item)=>item.id !== action.id);
            console.log("remainingItem",remainingItem);
            return [
                ...remainingItem
            ];
        case CHECKOUT_CART:
            data=[];
            return [
                ...data
            ];
        default:
            return data;
    }
}