import { Routes, Route } from "react-router-dom";
import { CART_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PRODCUT_DETAILS_BASE_ROUTE, SIGNUP_ROUTE } from "./constants/routes";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { useDispatch } from "react-redux";
import {useEffect} from "react";
import { initialUserStateSet } from "./store/slice/authSlice";
import Cart from "./pages/Cart";
import { initialStateSet } from "./store/slice/cartSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo= localStorage.getItem('userInfo');
    if(userInfo){
      dispatch(initialUserStateSet({userInfo:JSON.parse(userInfo)}));
    }
  }, [])
  useEffect(()=>{
    const cartInformation = localStorage.getItem('cartInformation');
    if(cartInformation){
      dispatch(initialStateSet({cartInformation:JSON.parse(cartInformation)}));
    }
  },[])
  
  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={<Login/>}/>
      <Route index path={HOME_ROUTE} element={<Home/>}/>
      <Route path={PRODCUT_DETAILS_BASE_ROUTE+"/:productId"} element={<Product/>}/>
      <Route path={SIGNUP_ROUTE} element={<Signup/>}/>
      <Route path={CART_ROUTE} element={<Cart/>}/>
    </Routes>
  );
}

export default App;
