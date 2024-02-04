import { LOGIN_ROUTE } from "../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct, removeProduct } from "../store/slice/cartSlice";
import { useMemo } from "react";
const useCart = (product) => {
  const { products } = useSelector((state) => state.cart);
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAddedtoCart = useMemo(() => {
    const findIndex = products.findIndex(
      (pdt) => pdt.productDetails.id === product.id
    );
    console.log(findIndex);
    if (findIndex >= 0) {
      return true;
    }
    return false;
  }, [products]);
  const toggleCart = (e) => {
    console.log(e);
    if (!isLoggedIn) {
      navigate(LOGIN_ROUTE);
      return;
    }
    if (!isAddedtoCart) {
      dispatch(
        addProduct({
          product,
        })
      );
    } else {
      dispatch(removeProduct({ productId: product.id }));
    }
  };
  const addToCart = () => {
    dispatch(
      addProduct({
        product,
      })
    );
  };
  const removeFromCart = () => {
    dispatch(removeProduct({ productId: product.id }));
  };
  return { isAddedtoCart, toggleCart, addToCart, removeFromCart };
};

export default useCart;
