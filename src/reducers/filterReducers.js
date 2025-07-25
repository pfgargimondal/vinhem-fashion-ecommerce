export const filterReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        
        case "PRODUCT_LIST":
            return {...state, productList: payload.products}

        case "CATEGORIES":
            return {...state, category: payload.category}

        case "MANUFACTURER":
            return {...state, manufacturer: payload.manufacturer}

        case "COLOR":
            return {...state, color: payload.color}

        case "SIZE":
            return {...state, size: payload.size}

        case "SORT_BY":
            return 

        case "REST_FILTER":
            return

        default:
            throw new Error("No product found!");
    }
}