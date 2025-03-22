import React from 'react'
import { useCart } from '../context/CartContext'
import { useLocation } from 'react-router-dom'
import Favorite from './Favorite'
import { useWhishList } from '../context/WhishListContext'

const ProductCard = ({id,title,description,price,image,count,favorite}) => {
    console.log('id inisde product card',id)
console.log('productcard')
    const location = useLocation()
 const{cartData,dispatch}=useCart()
//  const{whishList,setWhishList}=useWhishList()

 const isCartPage = location.pathname === '/cart'
 const isWhishlistPage = location.pathname === '/whishlist'


 const addItemsToCart = () => { 
    const item = cartData.cart.find(item => item.id === Number(id));

    if (!item || item.count < 10) {  
        dispatch({ type: 'ADD_TO_CART', payload: { id, title, description, price, image } });
    }
};

    return (

    <div className={` cursor-pointer w-full max-w-sm   bg-slate-300 flex flex-col justify-between py-2 px-2 rounded-lg border border-[#F5F5F5]`}>
        <div>
            <Favorite product={{id,title,description,price,image}} />
        </div>
        <div>
            <img className={`object-cover ${isCartPage && 'w-[40%]'} w-[60%] block mx-auto`} src={image} alt="" />
        </div>
        <div> 
            <h1 className='text-2xl font-bold '>{title}</h1>
            {
                !isCartPage &&  <p className='text-gray-700'>{description}</p>
            }
           
            <p className='text-2xl' >Price: <span className='text-red-700 font-semibold'> ${price}</span> </p>
        
        {
            isCartPage ? (
                <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => dispatch({ type: 'DECREMENT_ONE', payload: id })}
                  className="bg-orange-800 px-4 py-2 rounded-full flex justify-center items-center"
                >
                  -
                </button>
              
                <button
                  onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: id })}
                  className="bg-orange-800 px-4 py-2 rounded-full flex justify-center items-center"
                >
                  Remove from cart ({count})
                </button>
              
                <button
                  onClick={() => addItemsToCart()}
                  className="bg-orange-800 px-4 py-2 rounded-full flex justify-center items-center"
                >
                  +
                </button>
              </div>
              
            ) : isWhishlistPage ? ( 
                <button className="bg-blue-500 px-4 py-2 rounded-lg">Move to Cart</button>

            ) : (
               <>
               { count ==0 ? <>
            <button onClick={()=>addItemsToCart()} className=' block mx-auto bg-orange-800 px-4 py-2 rounded-lg'>Add To Cart</button>
        </> 
        :
        <div className='flex gap-2'>
                    {/* <button onClick={()=>addItemsToCart()} className=' block mx-auto bg-orange-800 px-4 py-2 rounded-lg'>+</button> */}
                    <button onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:id})} className=' block mx-auto bg-orange-800 px-4 py-2 rounded-lg'>Remove from cart ({count}) </button>
                    {/* <button onClick={()=>dispatch({type:'DECREMENT_ONE',payload:id})} className=' block mx-auto bg-orange-800 px-4 py-2 rounded-lg'>-</button> */}



        </div> }    </>

            )
        }
        
        </div>

        
      
    </div>
  )
}

export default ProductCard
