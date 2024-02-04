import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getProductDetails } from "../api-service/products";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import Loader from "../components/ui/Loader";
const Product = () => {
  const [productInfo, setProductInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    const getPorductInformation = async () => {
      try {
        setIsLoading(true);
        const res = await getProductDetails(productId);
        const data = await res.json();
        console.log(data);
        setProductInfo(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPorductInformation();
  }, []);

  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center">
          <Loader />
        </div>
      ) : productInfo ? (
        <ProductDetails
          title={productInfo.title}
          description={productInfo.description}
          amount={productInfo.amount}
          image={productInfo.image}
          rating={productInfo.rating}
          id={productInfo.id}
        />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <h1>Oops! Unbale to show the product</h1>
        </div>
      )}
    </main>
  );
};

export default Product;
