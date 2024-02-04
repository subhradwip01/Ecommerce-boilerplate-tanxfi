import { BASE_URL, END_POINTS } from "./api" 
export const getAllProducts = () =>{
    return fetch(`${BASE_URL}${END_POINTS.products}`);
}

export const getProductDetails = (id) => {
    return fetch(`${BASE_URL}${END_POINTS.products}/${id}`);
}