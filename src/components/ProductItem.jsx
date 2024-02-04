import React from "react";
import { IndianRupee, Heart, ShoppingCart } from "lucide-react";
import { Button } from "./ui/Button";
const ProductItem = ({ id, amount, image, rating, title }) => {
  return (
    <div className="shadow bg-white rounded-lg p-3 w-[300px]">
      <img src={image} className="w-[300px] object-fit aspect-[11/16]" />
      <div className="space-y-2 mt-2">
        <p className="truncate font-semibold">{title}</p>
        <div className="flex items-center justify-between w-full">
          <p className="flex items-center text-[20px]">
            <IndianRupee size={15} /> {amount}{" "}
          </p>
          <Heart className="text-rose-400"/>
        </div>
        <div className="flex  gap-3">
          <Button className="w-full">View</Button>
          <Button variant="outline" className="text-rose-400"><ShoppingCart/></Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
