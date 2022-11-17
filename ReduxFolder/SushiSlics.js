import { createSlice } from "@reduxjs/toolkit";


const MySushiSlice = createSlice({
    name:'sushi',
    initialState: [],
    reducers: {
        addMySushi(state, action ) {
            state.push(action.payload);
        }, 
    },

});



export const { addMySushi } = MySushiSlice.actions;

export default MySushiSlice.reducer;