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
        axios.get(apiUrl, {
            params: params,
            headers: axiosHeaders
        }).then((res) => {
            setProgressBar(30)
            setHotelList(res.data);
            setloading(false)
            setProgressBar(100)
        }).catch(() => {
            setHotelList([])
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
