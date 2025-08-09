import { configureStore } from "@reduxjs/toolkit";
import cartReduce from "../reducer/cart"


const configStore = configureStore({
    reducer:{
        newsCart: cartReduce
    }
})

export default configStore