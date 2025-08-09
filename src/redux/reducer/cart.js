import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "newsCart",
    initialState:{
        count: 0
    },
    reducers:{
        increment:(state) => {
            state.count +=1
        }
    }
})
export const { increment } = cartSlice.actions
export default cartSlice.reducer