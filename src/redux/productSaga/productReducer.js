import { SET_PRODUCT_LIST } from "../constant";

export const productList = (data = [], action) => {
    console.log("reducer called", action);
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return [
                ...action.data
            ];
        default:
            return data;
    }
}