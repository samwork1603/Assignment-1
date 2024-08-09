import { createSlice } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

const {outletName} = useParams;

export const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        addCart: (state,action) => {
            const updatedCart = {
               id: `${outletName}-${action.payload.item.id}`,
               item:action.payload.item
            }
            state.push.apply(updatedCart)
        }
    }
})

export const {addCart} = cartSlice.actions
export default cartSlice.reducer