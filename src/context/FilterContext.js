import { createContext, useContext, useReducer } from "react";

import { filterReducer } from "../reducers/filterReducers";

const filterInitialState = {
    productList: [],
    category: null,
    manufacturer: null,
    color: null,
    size: null,
    sortBy: null
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);


    //productlist

    function initialProductList(products) {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        })
    }


    //category

    function setCategory(category) {
        dispatch({
            type: "CATEGORIES",
            payload: {
                category: category
            }
        })
    }

    function filterCategory(products) {
        return state.category ? products.filter(product => product.category === state.category) : products;
    }


    //manufacturer

    function setManufacturer(manufacturer) {
        dispatch({
            type: "MANUFACTURER",
            payload: {
                manufacturer: manufacturer
            }
        })
    }

    function filterManufacturer(products) {
        return state.manufacturer ? products.filter(product => product.manufacturer === state.manufacturer) : products;
    }


    //color

    function setColor(color) {
        dispatch({
            type: "COLOR",
            payload: {
                color: color
            }
        })
    }

    function filterColor(products) {
        return state.color ? products.filter(product => product.color === state.color) : products;
    }


    //size

    function setSize(size) {
        dispatch({
            type: "SIZE",
            payload: {
                size: size
            }
        })
    }

    function filterSize(products) {
        return state.size ? products.filter(product => product.size === state.size) : products;
    }

    const filteredProducts = filterSize(filterColor(filterManufacturer(filterCategory(state.productList))));



    const value = {
        products: filteredProducts,
        initialProductList,
        setCategory,
        setManufacturer,
        setColor,
        setSize
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);

    return context;
}