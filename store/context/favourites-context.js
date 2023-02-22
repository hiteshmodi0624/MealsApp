import { createContext, useState } from "react";

export const FavouriteContext=createContext({
    ids:[],
    addFavourites:(id)=>{},
    removeFavourites:(id)=>{},
})
const FavouriteContextProvider=({children})=>{
    const [favouriteMealIds,setFavouriteMealIds]=useState([])
    const addFavourites=(id)=>{
        setFavouriteMealIds((prev)=>[...prev,id])
    }
    const removeFavourites=(id)=>{
        setFavouriteMealIds((prev)=>prev.filter((currId)=>currId!==id))
    }
    const value={
        ids:favouriteMealIds,
        addFavourites,
        removeFavourites
    }
    return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>;
}
export default FavouriteContextProvider