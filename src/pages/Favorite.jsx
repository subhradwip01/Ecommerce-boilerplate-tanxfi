import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProductItem from "../components/ProductItem";
import { NavLink, useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../constants/routes";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";

const Favorite = () => {
  const { products } = useSelector((state) => state.favourite);
  const navigate = useNavigate();
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <div className="space-y-5 p-5 relative">
        <h1 className="text-[25px] font-bold text-center mb-5">
          All <span className="text-rose-400">Favourites</span> Products
        </h1>
        <Button variant="outline" size="icon" className="absolute top-4 left-5 font-semibold text-[20px]" onClick={()=>navigate(-1)}><ArrowLeft /></Button>
        {products.length > 0 ? (
          <>
          <div className="p-5 justify-center items-start flex gap-5">
            {products.map((productDetails) => (
              <ProductItem
                key={productDetails.id}
                description={productDetails.description}
                id={productDetails.id}
                amount={productDetails.amount}
                title={productDetails.title}
                image={productDetails.image}
                rating={productDetails.rating}
              />
            ))}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center flex-col">
            <h1>Oops! No Items in the Favourites</h1>
            <p className="text-[20px]"><span><NavLink to={HOME_ROUTE} className="text-pink-800 font-semibold">Click here</NavLink></span>  to add items to your favourite</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Favorite;
