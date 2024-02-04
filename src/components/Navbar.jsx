import React from "react";
import { ShoppingCart, Heart } from "lucide-react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { CART_ROUTE, FAVOURITES, LOGIN_ROUTE } from "../constants/routes";
import { Button } from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {logout} from "../store/slice/authSlice";
const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const {totalQuantity} = useSelector(state=>state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  }
  return (
    <nav className="p-3 flex justify-between shadow bg-white sticky top-0">
      <Logo />
      <div className="flex items-center gap-2 justify-end">
        {isLoggedIn ? (
          <>
            {" "}
            <Link to={FAVOURITES} className="text-rose-400">
              <Heart fill="currentColor" />
            </Link>
            <Link to={CART_ROUTE} className="text-rose-400 flex items-center gap-2 border border-rose-400 rounded-full px-3 py-1">
              <ShoppingCart fill="currentColor" /> <span>{totalQuantity}</span>
            </Link>
            <Button variant="outline" onClick={onLogout}>Logout</Button>
          </>
        ) : (
          <Button onClick={()=>navigate(LOGIN_ROUTE)}>Login</Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
