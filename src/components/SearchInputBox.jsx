import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select"

const SearchInputBox = () => {

    const {goingTo} = useParams()
    const [city, setCity] = useState("")
    const [CityOptions, setCityOptions] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;

    const selectBoxStyle = {
        control:(base,state)=>({
            ...base,outline:"none",boxShadow:state.isFocused ? "":"",width:"100%",height:"fit-content",padding:".8rem 0.3rem",border:"1px solid #dee2e6",borderRadius:".375rem",display:"flex",backgroundColor:"#fff",':hover':{border:'1px solid #dee2e6'}
        }),
        singleValue: (base) => ({
            ...base,fontWeight: "600"
        }),
        input: (base) => ({
            ...base,fontWeight: "600"
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
        axios.get(`${apiUrl}cities`, axiosHeaders)
          .then((response) => {
            let cityOp = response.data.cities;
            cityOp = cityOp.map((option) => ({
              value: option.id,
              label: option.name,
            }));
            setCityOptions(cityOp);
            if (goingTo) {
              const selectedCity = cityOp.find((option) => option.value === goingTo);
              setCity(selectedCity || "");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, [apiUrl, goingTo]);


  return (
    <div>
      <Select
        options={CityOptions}
        placeholder="Going to"
        noOptionsMessage={() => "No City Found..."}
        styles={selectBoxStyle}
        name="goingTo"
        onChange={setCity}
        value={city}
        defaultInputValue={city}
      />
    </div>
  );
};

export default SearchInputBox;
