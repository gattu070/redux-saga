import { PRODUCT_LIST , PRODUCT_SEARCH} from "../constant";

export const proList = () => {
    // let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // data = await data.json();
    // console.log("action", data);
    return {
        type: PRODUCT_LIST
    }
}

export const proSearch = (query) => {
    console.log("Search Product",query);
    return {
        type: PRODUCT_SEARCH,
        query
    }
}