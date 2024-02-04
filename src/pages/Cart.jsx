import React from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import { Button } from "../components/ui/Button";
import { placeOrders } from "../api-service/orders";
import { clearCart } from "../store/slice/cartSlice";
const Cart = () => {
  const { totalQuantity, totalPrice, products } = useSelector(
    (state) => state.cart
  );
  const dispath = useDispatch();
  const onOrder = async () => {
    try {
      const res = await placeOrders({ products, totalPrice, totalQuantity });
      const data = await res.json();
      alert("Order Placed Succesfull");
      dispath(clearCart());
    } catch {
      alert("Unalbe to place order");
    }
  };
  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <div className="space-y-5 p-5">
        <h1 className=" text-[24px] font-bold ">
          Your <span className="text-rose-400">Items</span>
        </h1>
        {products.length > 0 ? (
          <>
            {products.map(({ productDetails, quantity }) => (
              <CartItems
                key={productDetails.id}
                description={productDetails.description}
                id={productDetails.id}
                amount={productDetails.amount}
                title={productDetails.title}
                image={productDetails.image}
                rating={productDetails.rating}
                quantity={quantity}
              />
            ))}
            <div className="border rounded-md border-grey-400 p-3 space-y-2">
              <div className="flex justify-between">
                <p className="font-bold">Total Items</p>
                <p>{totalQuantity}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Total Price</p>
                <p>{totalPrice}</p>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant={"outline"} onClick={() => dispath(clearCart())}>
                Clear Cart
              </Button>
              <Button onClick={onOrder}>Place order</Button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <h1>Oops! No Items in the cart</h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
