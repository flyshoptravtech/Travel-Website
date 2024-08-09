import { createContext, useContext, useEffect, useReducer } from "react";
import { useHotelContext } from "./hotelContext";
import filterReducer from "../reducer/filterReducer";

const FilterConext =createContext()

const initialState = {
    filter_products : [],
    all_products : [],
    filters:{
        text:"",
        property_type:[],
        price_range:[],
        rating:[],
        amenities:[],
        minPrice:100,
        maxPrice:200,
    }
}

export const FilterProvider = ({ children })=>{

    const {hotelList} = useHotelContext()
    const [state, dispatch] = useReducer(filterReducer,initialState)

    const handleUpdateFilter = (event) => {
        let name = event.target.name
        let value = event.target.value
        if(name === "rating"){
            value = Number(event.target.value)
        }
        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } })
    }

    const handlePriceFilter = (e)=>{
        return dispatch({ type:"UPDATE_PRICE_RANGE" ,payload: e })
    }

    useEffect(() => {
        dispatch({ type : "FILTER_PRODUCTS" })
    }, [hotelList,state.filters])
    

    useEffect(() => {
        dispatch({ type: "GET_HOTEL_LIST" , payload: hotelList })
    }, [hotelList])

    return (
        <FilterConext.Provider value={{...state,handleUpdateFilter,handlePriceFilter}} >
            {children}
        </FilterConext.Provider>
    )
}

export const useFilterContext = ()=>{
    return useContext(FilterConext);
}