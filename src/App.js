import { Routes, Route } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE, PRODCUT_DETAILS_BASE_ROUTE, SIGNUP_ROUTE } from "./constants/routes";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={<Login/>}/>
      <Route index path={HOME_ROUTE} element={<Home/>}/>
      <Route path={PRODCUT_DETAILS_BASE_ROUTE+"/:productId"} element={<Product/>}/>
      <Route path={SIGNUP_ROUTE} element={<Signup/>}/>
    </Routes>
  );
}

export default App;
