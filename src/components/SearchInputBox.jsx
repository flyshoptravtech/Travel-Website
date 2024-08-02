import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AsyncSelect from "react-select/async"
import axiosHeaders from "../helpers/AxiosHeader";

const SearchInputBox = () => {

  const {goingTo} = useParams()
  const [city, setCity] = useState("Delhi")
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
        }else{
          const defaultCity = cityOp.find((option) => option.label === "Delhi");
          setCity(defaultCity)
        }
    })
    .catch((error) => {
      console.log(error);
    });
    // eslint-disable-next-line
  }, [apiUrl, goingTo]);

  const loadOptions = (searchValue,callback)=>{
    setTimeout(() => {
      const filteredOptions  = CityOptions.filter(option=>option.label.toLowerCase().includes(searchValue.toLowerCase()))
      callback(filteredOptions)
    }, 100);
  }


  return (
    <div>
      <AsyncSelect
        loadOptions={loadOptions}
        defaultOptions={CityOptions}
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
