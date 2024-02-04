import { BASE_URL, END_POINTS } from "./api" 
export const getAllProducts = () =>{
    return fetch(`${BASE_URL}${END_POINTS.products}`);
}

export const getProductDetails = (id) => {
    return fetch(`${BASE_URL}${END_POINTS.products}/${id}`);
}

export const addFavourite = (product) => {
    return fetch(`${BASE_URL}${END_POINTS.favourites}`,{
        body:JSON.stringify(product),
        method:"POST"
    })
}

export const getFavouritesProducts = () => {
    return fetch(`${BASE_URL}${END_POINTS.favourites}`);
}

export const removeFavouriteProduct = (productId) => {
    return fetch(`${BASE_URL}${END_POINTS.favourites}/${productId}`,{
        method:"DELETE"
    });
}
