import axios from "axios";
import { useState, useEffect } from "react";

const Options = () => {
  const [CityOptions, setCityOptions] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  
  const selectBoxStyle = {
        control:(base,state)=>({
            ...base,outline:"none",boxShadow:state.isFocused ? "":"",width:"100%",height:"fit-content",padding:".8rem 0.3rem",border:"1px solid #dee2e6",borderRadius:".375rem",display:"flex",backgroundColor:"#fff",':hover':{border:'1px solid #dee2e6'}
        }),
        dropdownIndicator:()=>({
            display:"none",opacity:"0"
        }),
        placeholder:(base)=>({
            ...base,fontSize:"1rem",fontWeight:"600",padding:"0",color:"#595c5f"
        }),
        indicatorSeparator:()=>({
            backgroundColor:"transparent"
        }),
        clearIndicator:()=>({
            backgroundColor:"transparent"
        }),
    }

    const axiosHeaders = {
        headers:{"Content-Type":"application/json",}
    }

    useEffect(() => {
        axios.get(`${apiUrl}cities`,axiosHeaders)
            .then(response => {
                let cityOp = response.data.cities
                cityOp = cityOp.map((option=>({
                    value : option.id,
                    label : option.name
                })))
                setCityOptions(cityOp);
            })
            .catch(error => {
                console.log(error.data);
            });
        // eslint-disable-next-line    
    }, [apiUrl]);

  return { CityOptions, selectBoxStyle };
};

export default Options;