import React from "react";
import { IndianRupee, ShoppingCart, Star } from "lucide-react";
import { Button } from "./ui/Button";
import useCart from "../hook/useCart";
const ProductDetails = ({ id, image, title, description, amount, rating }) => {
  const {toggleCart,isAddedtoCart} = useCart({ id, amount, image, rating, title, description });
  return (
    <div className="flex items-center justify-center flex-1">
      <div className="w-2/3 lg:w-1/2 flex justify-center gap-5 p-5 items-center flex-wrap">
        <img src={image} className="w-[350px] object-fit aspect-[11/16]" />
        <div className="space-y-3">
          <p className="text-[34px] font-medium">{title}</p>
          <p>{description}</p>
          <div className="flex items-center gap-3">
          <p className="flex gap-2 items-center">
            <Star size={18} /> {rating}
          </p>
          <p className="flex gap-2 items-center">
            <IndianRupee size={18} /> {amount}
          </p>
          </div>
          <hr />
          <Button onClick={toggleCart} className="gap-3">
            <ShoppingCart /> {isAddedtoCart ? "Remove from cart" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
