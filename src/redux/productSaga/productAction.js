import { PRODUCT_LIST , SET_PRODUCT_LIST } from "../constant";

export const proList = () => {
    // let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // data = await data.json();
    // console.log("action", data);
    return {
        type: PRODUCT_LIST
    }
}

// export const setProList = (data) => {
//     console.log("SET PRODUCT DATA", data);
//     return {
//         type: SET_PRODUCT_LIST,
//         data
//     }
// }