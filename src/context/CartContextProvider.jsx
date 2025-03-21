import React, { useReducer, useState } from 'react'
import { CartContext } from './CartContext'

const CartContextProvider = ({children}) => {
    const initialState={
        cart:[],
        totalItems:0,
        totalAmount:0
    }
    

    // // const[cartItems,setCartItems]=useState([])
    // const reducerFunction=(state,action)=>{
    //     switch(action.type){

    //         case 'ADD_TO_CART' : 
    //        const existing =  state.cart.find(product=>product.id==action.payload.id)
    //        console.log(existing)
    //        if(existing){
    //         if(existing.count){

    //             existing.count = existing.count +1
    //         }else{
    //             existing.count =1
    //         }
            
    //         console.log(existing)
    //         return {...state,cart:[...state.cart,existing],totalAmount:state.totalAmount+action.payload.price,totalItems:state.totalItems+1}

    //        }else{

    //            return {...state,cart:[...state.cart,action.payload],totalAmount:state.totalAmount+action.payload.price,totalItems:state.totalItems+1}
    //        }
    //     }
    // }

    const reducerFunction = (state, action) => {
        switch (action.type) {
            case 'ADD_TO_CART': {
                const existing = state.cart.find(product => product.id === action.payload.id);
                
                if (existing) {
                    return {
                        ...state,
                        cart: state.cart.map(product => 
                            product.id === action.payload.id 
                                ? { ...product, count: (product.count || 1) + 1 } 
                                : product
                        ),
                        totalAmount: state.totalAmount + action.payload.price,
                        totalItems: state.totalItems + 1
                    };
                } else {
                    return {
                        ...state,
                        cart: [...state.cart, { ...action.payload, count: 1 }],
                        totalAmount: state.totalAmount + action.payload.price,
                        totalItems: state.totalItems + 1
                    };
                }
            }
    
            default:
                return state;
        }
    };
    
    
    const[cartData,dispatch]=useReducer(reducerFunction,initialState)
    console.log(cartData)
  return (
    <CartContext.Provider value={{cartData,dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
