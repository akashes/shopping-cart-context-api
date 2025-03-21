import { createContext, useContext } from "react";

export const CartContext = createContext()



//custom hook to get the cart from the context
export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}