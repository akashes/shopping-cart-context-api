import React, { useState, useEffect } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useWhishList } from '../context/WhishListContext';

const Favorite = ({ product }) => {
    const { whishList, dispatch } = useWhishList();

    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        const isFavorite = whishList.some(wishItem => wishItem.id === Number(product.id));
        console.log("Updated favorite:", isFavorite);
        setFavorite(isFavorite);
    }, [whishList, product.id]); 

    return (
        <button>
            {favorite ? 
                <button onClick={() => {
                    dispatch({ type: 'REMOVE_FROM_WHISHLIST', payload: product.id });
                }}>
                    <FaHeart />
                </button>
            :
                <button onClick={() => {
                    dispatch({ type: 'ADD_TO_WHISHLIST', payload: { ...product, favorite: true } });
                }}>
                    <CiHeart />
                </button>
            }
        </button>
    )
}

export default Favorite;
