const filterReducer = (state,action)=>{

    switch (action.type) {
        case "GET_HOTEL_LIST":

            let priceArr = action.payload.map((item)=>item.price)
            let maxPrice = priceArr.length > 0 ? Math.max(...priceArr) : 200;

            return {
                ...state,
                filter_products:[...action.payload],
                all_products:[...action.payload],
                filters:{...state.filters,maxPrice}
            };
        
        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;
            const existingValues = state.filters[name] || "";
            if (Array.isArray(existingValues)) {
                const newValues = existingValues.includes(value)
                  ? existingValues.filter((item) => item !== value)
                  : [...existingValues, value];
                return {
                  ...state,
                  filters: {
                    ...state.filters,
                    [name]: newValues,
                  },
                };
            } else {
                return {
                  ...state,
                  filters: {
                    ...state.filters,
                    [name]: value,
                  },
                };
            }

        case "FILTER_PRODUCTS" : 
            const { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text,property_type,price_range,rating,amenities } = state.filters;

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((product) => {
                    return (product.property_name.toLowerCase().includes(text.toLowerCase()));
                });
            }

            if (rating && rating.length > 0) {
                tempFilterProduct = tempFilterProduct.filter((product) => {
                    return rating.includes(product.rating);
                });
            }
            if (property_type && property_type.length > 0) {
                tempFilterProduct = tempFilterProduct.filter((product) => {
                    return property_type.includes(product.property_type);
                });
            }
            if (rating.length === 0) return {...state,filter_products:tempFilterProduct};
            if (property_type.length === 0) return {...state,filter_products:tempFilterProduct};

            return { ...state,filter_products:tempFilterProduct }
            
        default: return state;
    }
}

export default filterReducer