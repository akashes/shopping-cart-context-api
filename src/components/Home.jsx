import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useCart } from '../context/CartContext'

const Home = () => {

    const[products , setProducts ]=useState([])
    const[updatedProducts,setUpdatedProducts]=useState([])

    //merge count of products with cart
    const {cartData }=useCart()

   

    
   

    useEffect(()=>{

        const fetchProducts=async()=>{
            try {
              const res =  await fetch('/dummy.json')
              const data = await res.json()
              console.log(data.products)
              setProducts(data.products)
            } catch (error) {
                console.log(error)
                
            }
        }

        fetchProducts()

    },[])
    useEffect(()=>{
      const updatedProductsData = products.map((product)=>{
        const cartItem = cartData.cart.find((cartProduct)=>cartProduct.id==product.id)
        if(cartItem){
  
          return {...product,count:cartItem.count}
  
        }else{
          return {...product,count:0,favorite:false}
        }
      })
      setUpdatedProducts(updatedProductsData)

    },[products,cartData])
  return (
    <div className='flex justify-evenly flex-wrap gap-8  mt-[20vh] w-full '>
    {
        updatedProducts?.length>0 && updatedProducts.map((product, index)=>{
          console.log(product.count)
        
        return (
            <ProductCard favorite={product?.favorite} count={product?.count} id={product.id} title={product.title} price={product.price}  description={product.description} image={product.images[0]} key={index} />
        )
        })

    }
    </div>
  )
}

export default Home
