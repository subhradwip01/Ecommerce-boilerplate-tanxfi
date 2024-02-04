import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProductItem from "../components/ProductItem";

const Favorite = () => {
  const { products } = useSelector((state) => state.favourite);
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <div className="space-y-5 p-5">
        <h1 className="text-[25px] font-bold text-center mb-5">
          All <span className="text-rose-400">Favourites</span> Products
        </h1>
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
          <div className="flex-1 flex items-center justify-center">
            <h1>Oops! No Items in the Favourites</h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default Favorite;
