const filterReducer = (state,action)=>{

    switch (action.type) {
        case "GET_HOTEL_LIST":

            let priceArr = action.payload.map((item)=>item.price)
            let maxPrice = priceArr.length > 0 ? Math.max(...priceArr) : 200;
            const remainder = maxPrice % 10
            if (remainder !== 0) {
                const diff = 10 - remainder;
                maxPrice = maxPrice + diff;
            }

            return {
                ...state,
                filter_products:[...action.payload],
                all_products:[...action.payload],
                filters:{...state.filters,maxPrice:maxPrice}
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

        case "UPDATE_PRICE_RANGE" :
            let priceValues = action.payload;
            let {filter_products} = state;

            const tempPriceProduct = filter_products.filter((product) => {
                return product.price >= priceValues[0] && product.price <= priceValues[1];
            });

            return {
                ...state,filters: { ...state.filters, price_range: priceValues },filter_products: tempPriceProduct
            }

        case "FILTER_PRODUCTS" : 
            const { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text,property_type,rating,price_range,amenities } = state.filters;

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

            if (price_range && price_range.length === 2) {
                tempFilterProduct = tempFilterProduct.filter((product) => {
                    return product.price >= price_range[0] && product.price <= price_range[1];
                });
            }

            if (rating.length === 0) return {...state,filter_products:tempFilterProduct};
            if (property_type.length === 0) return {...state,filter_products:tempFilterProduct};

            return { ...state,filter_products:tempFilterProduct }

        default: return state;
    }
}

export default filterReducer