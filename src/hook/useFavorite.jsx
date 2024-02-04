import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../store/slice/favouriteSlice";
import { addFavourite, removeFavouriteProduct } from "../api-service/products";

const useFavorite = (product) => {
  const { products } = useSelector((state) => state.favourite);
  const dispatch = useDispatch();
  const isFavorite = useMemo(() => {
    const findIndex = products.findIndex(
      (pdt) => pdt.id === product.id
    );
    console.log(findIndex);
    if (findIndex >= 0) {
      return true;
    }
    return false;
  }, [products]);
  const toggleFavorite = () =>{
    if(!isFavorite){
        addToFavorites();
    }else{
        removeFromFavourite();
    }
  }
  const addToFavorites = async () => {
    if (isFavorite) return;
    try {
      await addFavourite(product);
      dispatch(
        addProduct({
          product,
        })
      );
    } catch (e) {
      
    }
  };
  const removeFromFavourite = async () => {
    try {
     
      await removeFavouriteProduct(product.id);
      dispatch(removeProduct({ productId: product.id }));
    } catch (error) {
        console.log(error);
    }
  };

  return { isFavorite, toggleFavorite };
};

export default useFavorite;
