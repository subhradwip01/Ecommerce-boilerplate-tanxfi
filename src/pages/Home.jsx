import React, { useState, useEffect, useMemo } from "react";
import Navbar from "../components/Navbar";
import { getAllProducts } from "../api-service/products";
import Products from "../components/Products";
import Loader from "../components/ui/Loader";
import { Input } from "../components/ui/Input";

const Home = () => {
  const [products, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
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

  const filteredProducts = useMemo(() => {
    return products.filter((pdt) => pdt.title.includes(query));
  }, [query]);

  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center">
          <Loader />
        </div>
      ) : products.length > 0 ? (
        <>
          <div className="flex p-5 gap-3">
            <Input
              placeholder="Search here..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Products products={filteredProducts} query={query} />
          {filteredProducts.length ===  0 && (
            <div className="flex-1 flex items-center justify-center">
              <h1 className="text-[30px] font-bold">No Search result found</h1>
            </div>
          )}
        </>
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
