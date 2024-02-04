import React from "react";
import useCart from "../hook/useCart";
import { IndianRupee, Plus, Minus } from "lucide-react";
import { Button } from "./ui/Button";
const CartItems = ({
  id,
  amount,
  image,
  rating,
  title,
  description,
  quantity,
}) => {
  const { addToCart, removeFromCart } = useCart({
    id,
    amount,
    image,
    rating,
    title,
    description,
  });
  return (
    <div className="border border-grey-400 flex justify-betwee p-3 rounded-md items-center">
      <img className="w-[200px] aspect-[9/11]" src={image} />
      <div className="space-y-3">
        <p className="font-semibold">{title}</p>
        <p className="flex items-center gap-3">
          <IndianRupee size={18} />
          <span>
            {amount} x {quantity} = {amount * quantity}
          </span>
        </p>
        <div className="flex items-center gap-3">
          <Button onClick={removeFromCart} variant="outline">
            <Minus />
          </Button>
          <p className="text-[18px]">{quantity}</p>
          <Button onClick={addToCart} variant="outline">
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
