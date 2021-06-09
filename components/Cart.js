import React, { createContext, useReducer } from 'react'
import "./Cart.css";
import ContextCart from './ContextCart';
import { Products } from "./Product"
import { reducer } from "./Reducer"


export const CartContext = createContext()
const initialState = {
    item: Products,
    totalAmount: 0,
    totalItem: 0,

}

const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVEITEM",
            payload: id,
        })

    }
    const ClearCart = () => {
        return dispatch({
            type: "CLEARCART"
        })
    }
    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        })
    }
    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        })
    }


    return (
        <CartContext.Provider value={{ ...state, removeItem, ClearCart,increment,decrement }}>
            <ContextCart />
        </CartContext.Provider>

    )
}
export default Cart