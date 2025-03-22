import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FaShoppingCart } from "react-icons/fa";
import { useWhishList } from '../context/WhishListContext';
import { FaHeart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";



const Header = () => {
    const{cartData}=useCart()
    const{whishList}=useWhishList()
    console.log(whishList)
  return (
    <nav className='h-[10vh] fixed top-0 left-0 right-0  bg-slate-200 flex-col sm:flex-row justify-between px-5 items-center '>
        <h1 className='font-bold text-3xl '>
          <Link to={"/"}>Ecommerce</Link>
        </h1>
    <ul className='flex gap-3 items-center justify-center sm:justify-end '>
      <li><Link className='flex gap-1 items-center px-4 py-2' to="/"> <IoHome/>Home</Link></li>
      <li><Link className='flex gap-1 items-center px-4 py-2' to="/cart"><FaShoppingCart/>  Cart({cartData.totalItems})</Link></li>
      <li><Link className='flex gap-1 items-center px-4 py-2' to="/whishlist"><FaHeart/>  Whishlist({whishList.length})</Link></li>
    </ul>
  </nav>
  )
}

export default Header
