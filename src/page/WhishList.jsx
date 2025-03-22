import React from 'react'
import { useWhishList } from '../context/WhishListContext'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import { GoBookmarkSlashFill } from "react-icons/go";


const WhishList = () => {
    console.log('inside')
    const { whishList } = useWhishList()
    console.log(whishList)

    return (
        <>
            {whishList?.length > 0 ? (
                <div className='w-full flex justify-evenly my-3 mx-3 flex-wrap gap-3'>
                    {whishList.map((product, index) => (
                        <ProductCard
                            key={index}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            image={product.image}
                            favorite={product?.favorite}
                        />
                    ))}
                </div>
            ) : (
                <div className='bg-gray-100 h-screen flex flex-col justify-center items-center'>
                    <div className='flex items-center my-5'>
                        <h1 className='flex items-center gap-3 text-2xl font-bold '>No items in the wishlist <GoBookmarkSlashFill /> </h1>
                        {/* <img className='w-[100px]' alt="" /> */}
                    </div>
                    <Link to={'/'} className='bg-green-700 text-white cursor-pointer py-2 px-3 rounded-lg'>
                        Go Back To Home 
                    </Link>
                </div>
            )}
        </>
    )
}

export default WhishList
