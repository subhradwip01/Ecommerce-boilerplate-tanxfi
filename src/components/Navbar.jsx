import React from 'react'
import {ShoppingCart,Heart} from 'lucide-react'
import Logo from './Logo';
import {Link} from "react-router-dom"
import { CART_ROUTE, FAVOURITES } from '../constants/routes';
import { Button } from './ui/Button';
const Navbar = () => {
  const isLogin = true;
  return (
    <nav className='p-3 flex justify-between shadow bg-white sticky top-0'>
        <Logo/>
        <div className='flex items-center gap-2 justify-end'>
         <Link to={FAVOURITES} className="text-rose-400"><Heart fill='currentColor' /></Link>
         <Link to= {CART_ROUTE} className='text-rose-400'><ShoppingCart fill='currentColor'/></Link>
         {!isLogin ? <Button>Login</Button> : <Button variant="outline">Logout</Button>}
        </div>
    </nav>
  )
}

export default Navbar