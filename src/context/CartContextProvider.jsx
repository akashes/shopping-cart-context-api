import React, { useReducer, useState } from 'react'
import { CartContext } from './CartContext'



//not actually requried . the corresponding fns/data are inside the context by default
// export const calcTotalItems=(cart)=>{

//     return cart.reduce((sum,item)=>item.count+sum,0)
// }
// export const calcTotalPrice=(cart)=>{
//     return cart.reduce((sum,item)=>sum+item.count*item.price,0)
// }
const CartContextProvider = ({children}) => {
    const initialState={
        cart:[],
        totalItems:0,
        totalAmount:0
    }
    


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
            case 'REMOVE_FROM_CART': {
                const remaining = state.cart.filter(item => item.id !== Number(action.payload));
                
                const total = remaining.reduce((acc, item) => acc + (item.price * (item.count || 1)), 0); //  price * count
                const totalItems = remaining.reduce((acc, item) => acc + (item.count || 1), 0);
            
                return {
                    ...state,
                    cart: remaining,
                    totalAmount: total, 
                    totalItems: totalItems 
                };
            }
            case 'DECREMENT_ONE': {
                const existing = state.cart.find(item => item.id === action.payload);
                
                if (existing) {
                    const updated = state.cart
                        .map(product => 
                            product.id === existing.id
                                ? { ...product, count: product.count - 1 }
                                : product
                        )
                        .filter(product => product.count > 0); // 🔥 Remove products with count 0
            
                    const total = updated.reduce((acc, item) => acc + (item.price * (item.count || 1)), 0);
                    const totalItems = updated.reduce((acc, item) => acc + (item.count || 1), 0);
            
                    return { ...state, cart: updated, totalAmount: total, totalItems };
                }
                
                return state;
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
