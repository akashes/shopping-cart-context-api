import React, { useReducer } from 'react'
import { WhishListContext } from './WhishListContext'


const WhishListContextProvider = ({children}) => {
    const reducerFunction=(state,action)=>{
        switch(action.type){
            case 'ADD_TO_WHISHLIST':
                    return [...state,action.payload]

                    case 'REMOVE_FROM_WHISHLIST': {
                        console.log("Removing:", action.payload);
                    
                        const newState = state.filter(product => product.id !== Number(action.payload));
                    
                        if (newState.length === state.length) {
                            console.warn("Item not found in wishlist, state remains unchanged.");
                        }
                    
                        console.log("Updated State:", newState);
                    
                        return [...newState]; // Ensure a new reference is returned
                    }
                    

                         default : return state



    }
}

   
    const[whishList,dispatch]=useReducer(reducerFunction,[])
  return (
   <WhishListContext.Provider value={{whishList,dispatch}}>
{children}
   </WhishListContext.Provider>
  )
}

export default WhishListContextProvider
