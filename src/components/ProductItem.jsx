import React, { useMemo } from "react";
import { IndianRupee, Heart, ShoppingCart, Star } from "lucide-react";
import { Button, buttonVariants } from "./ui/Button";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, PRODCUT_DETAILS_BASE_ROUTE } from "../constants/routes";
import useCart from "../hook/useCart";
import useFavorite from "../hook/useFavorite";
import { useSelector } from "react-redux";
const ProductItem = ({ id, amount, image, rating, title, description }) => {
  const { isAddedtoCart, toggleCart } = useCart({
    id,
    amount,
    image,
    rating,
    title,
    description,
  });
  const { isFavorite, toggleFavorite } = useFavorite({
    id,
    amount,
    image,
    rating,
    title,
    description,
  });
  const {isLoggedIn} = useSelector(state=>state.user);
  return (
    <div className="shadow bg-white rounded-lg p-3 w-[300px]">
      <img src={image} className="w-[300px] object-fit aspect-[11/16]" />
      <div className="space-y-2 mt-2">
        <p className="truncate font-semibold">{title}</p>
        <p className="flex gap-2 items-center">
          <Star size={18} fill="black" /> {rating}
        </p>
        <div className="flex items-center justify-between w-full">
          <p className="flex items-center text-[20px]">
            <IndianRupee size={15} /> {amount}{" "}
          </p>
          {isLoggedIn && <Button variant="link" onClick={toggleFavorite}>
            <Heart
              className="text-rose-400"
              fill={isFavorite ? "pink" : "none"}
            />
          </Button>}
        </div>
        <div className="flex  gap-3">
          <Link
            to={`${PRODCUT_DETAILS_BASE_ROUTE}/${id}`}
            className={buttonVariants({
              variant: "default",
              size: "default",
              className: "w-full",
            })}
          >
            View
          </Link>

          {isLoggedIn && <Button
            onClick={toggleCart}
            variant="outline"
            className="text-rose-400"
          >
            <ShoppingCart fill={isAddedtoCart ? "pink" : "none"} />
          </Button>}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductItem);
