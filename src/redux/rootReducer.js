import { combineReducers } from "redux";
import { cartData } from "./cartSaga/reducer";
import { productList } from "./productSaga/productReducer";

export default combineReducers({
    cartData,
    productList
})