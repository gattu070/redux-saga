import { createStore } from 'redux';

const demoReducer = () => {
    return 'store';
}
const store = createStore(demoReducer);

export default store;