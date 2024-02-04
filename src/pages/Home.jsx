import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getAllProducts } from "../api-service/products";
import Products from "../components/Products";
import Loader from "../components/ui/Loader";

const Home = () => {
  const [products, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const res = await getAllProducts();
        const data = await res.json();
        setAllProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center">
          <Loader />
        </div>
      ) : products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-[30px] font-bold">
            Oops! there is no product found
          </h1>
        </div>
      )}
    </main>
  );
};

export default Home;
