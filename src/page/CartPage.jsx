import React from 'react'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

const CartPage = () => {
    const{cartItems}=useCart()
  return (
    <div>
 <div className='flex justify-evenly flex-wrap gap-8 my-10 w-full '>
    {
        cartItems?.length>0 && cartItems?.map((product, index)=>{
        
        return (
            <ProductCard title={product.title} price={product.price}  description={product.description} image={product.image} key={index} />
        )
        })

    }
    </div>    </div>
  )
}

export default CartPage
