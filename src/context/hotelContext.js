import axios from 'axios';
import React, { useState, createContext, useContext, useCallback } from 'react';
import axiosHeaders from '../helpers/AxiosHeader';

const HotelContext = createContext();

export const HotelProvider = ({ children }) => {

    const apiUrl = `${process.env.REACT_APP_API_URL}hotel-search`;
    const [hotelList, setHotelList] = useState([]);
    const [loading, setloading] = useState(true)
    const [progressBar, setProgressBar] = useState(0);

    const handleHotelSearch = useCallback((params) => {
        setloading(true)
        setProgressBar(30)
        axios.get(apiUrl, {
            params: params,
            headers: axiosHeaders
        }).then((res) => {
            setHotelList(res.data);
        }).catch(() => {
            setHotelList([])          
        }).finally(()=>{
            setProgressBar(100)
            setloading(false)
        })
    }, [apiUrl]);

    return (
        <HotelContext.Provider value={{ hotelList,handleHotelSearch,loading,progressBar }}>
            {children}
        </HotelContext.Provider>
    );
};

export const useHotelContext = () => {
    return useContext(HotelContext);
};

export default HotelContext;
