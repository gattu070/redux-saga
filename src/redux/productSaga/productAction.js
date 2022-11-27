import { PRODUCT_LIST , PRODUCT_SEARCH} from "../constant";

export const proList = () => {
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