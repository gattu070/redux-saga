import { takeEvery, put } from 'redux-saga/effects';
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST } from '../constant';

function* getProducts() {
    let data = yield fetch("http://localhost:5000/products");
    data = yield data.json();
    yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
    let res = yield fetch(`http://localhost:5000/products?q=${data.query}`);
    res = yield res.json();
    console.log(res);
    yield put({ type: SET_PRODUCT_LIST, data: res });
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts);
    yield takeEvery(PRODUCT_SEARCH, searchProducts);
}

export default productSaga;