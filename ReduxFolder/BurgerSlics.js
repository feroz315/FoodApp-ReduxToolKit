import { createSlice } from "@reduxjs/toolkit";


const MyBurgerSlice = createSlice({
    name:'burger',
    initialState: [],
    reducers: {
        addMyBurger(state, action ) {
            state.push(action.payload);
        }, 
    },

});



export const { addMyBurger } = MyBurgerSlice.actions;

export default MyBurgerSlice.reducer;