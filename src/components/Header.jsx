import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
    const{cartData}=useCart()
  return (
    <nav className='h-[10vh] bg-slate-200 flex justify-between px-5 items-center '>
        <h1 className='font-bold text-3xl'>Shopping Cart</h1>
    <ul className='flex gap-3 items-center '>
      <li><Link to="/">Home</Link></li>
      <li><Link className='flex gap-1 items-center border px-4 py-2' to="/cart"><FaShoppingCart/>  Cart({cartData.totalItems})</Link></li>
    </ul>
  </nav>
  )
}

export default Header
