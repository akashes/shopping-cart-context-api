import React from 'react'
import { useCart } from '../context/CartContext'

const ProductCard = ({id,title,description,price,image}) => {
 
    const{cartData,dispatch}=useCart()

    const addItemsToCart =()=>{ 
        // setCartItems((prevItems)=>{
        //     return [...prevItems,{title,description,price,image}]
        // })
        dispatch({type:'ADD_TO_CART',payload:{id,title,description,price,image}})
    }
    return (

    <div className='w-full max-w-sm bg-slate-300 flex flex-col justify-between py-2 px-2 rounded-lg border border-[#F5F5F5]'>
        <div>
            <img className='object-cover w-[60%] block mx-auto' src={image} alt="" />
        </div>
        <div>
            <h1 className='text-2xl font-bold '>{title}</h1>
            <p className='text-gray-700'>{description}</p>
            <p className='text-2xl' >Price: <span className='text-red-700 font-semibold'> ${price}</span> </p>
            <button onClick={()=>addItemsToCart()} className=' block mx-auto bg-orange-800 px-4 py-2 rounded-lg'>Add To Cart</button>
        </div>

        
      
    </div>
  )
}

export default ProductCard
