import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Home = () => {

    const[products , setProducts ]=useState([])

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
  return (
    <div className='flex justify-evenly flex-wrap gap-8 my-10 w-full '>
    {
        products?.length>0 && products.map((product, index)=>{
        
        return (
            <ProductCard id={product.id} title={product.title} price={product.price}  description={product.description} image={product.images[0]} key={index} />
        )
        })

    }
    </div>
  )
}

export default Home
