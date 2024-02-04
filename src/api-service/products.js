import { BASE_URL, END_POINTS } from "./api" 
export const getAllProducts = () =>{
    return fetch(BASE_URL+END_POINTS.products);
}