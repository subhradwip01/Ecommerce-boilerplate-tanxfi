import { BASE_URL, END_POINTS } from "./api"

export const placeOrders = (products) => {
    return fetch(`${BASE_URL}${END_POINTS.orders}`,{
        body:JSON.stringify(products),
        method:"POST"
    })
}