import { createContext, useContext } from "react";


export const WhishListContext = createContext()


//custom hook


export const useWhishList =()=>{
    return useContext(WhishListContext)
}