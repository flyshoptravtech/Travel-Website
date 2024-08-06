import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import axiosHeaders from "../helpers/AxiosHeader";
import { toast } from "react-toastify";

const HomeStayContext = createContext()

export const HomeProvider = ({children}) =>{

    const apiUrl = process.env.REACT_APP_API_URL
    const islog1 = localStorage.getItem("aff-info")
    const islog2 = localStorage.getItem("aff-token")
    const [loading, setloading] = useState(false)
    const [homeloading, setHomeloading] = useState(true)
    const [country, setcountry] = useState([])
    const [state, setstate] = useState([])
    const [city, setcity] = useState([])
    const [success, setsuccess] = useState(false)
    const homeHeaders = { headers: { ...axiosHeaders.headers, Authorization: `Bearer ${islog2}`,},} 

    const getCountryList = () => {
        axios.get(`${apiUrl}countries-list`,homeHeaders)
        .then(res=>{
            setHomeloading(false);
            setcountry(res.data.countries)
        })
        .catch(()=>{
            setHomeloading(false);
            setcountry([{id:"",name:"No Country Found"}])
        })
    }
    
    const getStateList = (e) =>{
        setHomeloading(true)
        let { value } = e.target
        axios.get(`${apiUrl}state-list-by-country?country=${value}`,homeHeaders)
        .then(res=>{
            setHomeloading(false)
            setstate(res.data.states)
        }).catch(()=>{
            setHomeloading(false);
            setstate([{id:"",name:"No State Found"}])
        })
    } 
    
    const getCityList = (e) => {
        setHomeloading(true)
        let { value } = e.target
        axios.get(`${apiUrl}cities-list-by-state?state=${value}`,homeHeaders)
        .then(res=>{
            setHomeloading(false)
            setcity(res.data.cities)
        }).catch(()=>{
            setHomeloading(false);
            setcity([{id:"",name:"No City Found"}])
        })
    }

    const handleAddHomeStay = (e) =>{
        e.preventDefault()
        setloading(true)
        const form = new FormData(e.target)
        const data = Object.fromEntries(form.entries())
        axios.post(`${apiUrl}create-home-stay-by-affiliate`,data,axiosHeaders)
        .then(res=>{
            toast.success(res.data.message);
            setloading(false);
            setsuccess(true)
        })
        .catch(err=>{
            const error = err.response.data.errors;
            const firstErrorKey = Object.keys(error)[0];
            toast.error(error[firstErrorKey][0]);
            setloading(false);
        })
    }

    useEffect(() => {
        if (islog1 || islog2) {
          getCountryList();
        }
        // eslint-disable-next-line
    }, [islog1, islog2]);
    

    return (
        <HomeStayContext.Provider value={{country,state,city,getStateList,loading,getCityList,homeloading,handleAddHomeStay,success,setsuccess }} >
            {children}
        </HomeStayContext.Provider>
    )
}

export const useHomeContext = () =>{
    return useContext(HomeStayContext);
}

export default HomeStayContext;