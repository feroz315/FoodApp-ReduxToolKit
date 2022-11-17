import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "./HomeSlics";
import MyCartReducer from "./CartSlics";

export const mystore = configureStore({
    reducer: {
        product: MyProductReducer,
        cart: MyCartReducer
    },
});