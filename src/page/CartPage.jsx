import React from 'react'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'
import emptyCart from '../assets/emptyCart.png'
import { Link } from 'react-router-dom'
const CartPage = () => {
    const{cartData}=useCart()
    console.log(cartData.cart)
  return (
 <>
 {
  cartData.cart.length > 0 ? (
    <div className='w-[100vw] flex flex-col sm:flex-row  px-5 pt-5'> 
    <div  className='w-[100%] sm:w-[60%] flex justify-evenly flex-wrap gap-8  '>
       {
           cartData?.cart?.length>0 && cartData.cart.map((product, index)=>{
             console.log(product)
           
           return (
               <ProductCard count={product.count} id={product.id} title={product.title} price={product.price}  description={product.description} image={product.image} key={index} />
           )
           })
   
       }
       </div>  
       <div className='w-[100%] sm:w-[40%] flex flex-col   border-[#F5F5F5] '>
           {/* <h5 className='text-2xl font-bold'  >Total Items :{calcTotalItems(cartData.cart)} </h5>
           <h5 className='text-2xl font-bold'> Total Amount :{calcTotalPrice(cartData.cart)} </h5> */}
           <h5 className='text-2xl font-bold'  >Total Items : {cartData.totalItems}</h5>
           <h5 className='text-2xl font-bold'> Total Amount : {cartData.totalAmount.toFixed(2)}</h5>
           <button className='bg-black text-white py-2 px-3 rounded-lg'>Checkout</button>
       </div>
         </div>
  ) : (
    <div className=' bg-gray-100 h-screen flex flex-col justify-center items-center'>

      <div className='flex items-center my-5'>
      <h1 className='text-2xl font-bold text-center'>No items in the cart</h1>
      <img className='w-[100px]' src={emptyCart} alt="" />
      </div>
      <Link to={'/'} className=' bg-green-700 text-white  cursor-pointer py-2 px-3 rounded-lg'>Go Back To Home</Link>
    </div>
  )
 }
 </>
  )
}

export default CartPage
