import { createSlice } from "@reduxjs/toolkit";


const MyCartSlice = createSlice({
    name:'cart',
    initialState: [],
    reducers: {
        addMyProductsToMyCart(state, action ) {
             let myindex = -1;
             state.map((item, index) => {
                if(item.id == action.payload.id) {
                    myindex = index; 
                 }
              }); 
             if(myindex == -1) {
               state.push({
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                pics: action.payload.pics,
                qty: action.payload.qty + 1,
              });
             } else {  
                state[myindex].qty = state[myindex].qty + 1;
             }                          
          },
           removetoCart(state, action ) {
            let myindex =-1;
            state.map((item,index) => {
               if(item.id == action.payload.id) {
                  myindex = index; 
               }
            });
            if(myindex == -1){
                }
              else {
             state[myindex].qty = state[myindex].qty - 1;
            }
          },
          DeleteMyCart(state,action ) {
            return (state = state.filter(item => item.id !== action.payload));
          },
       },
    });



export const { addMyProductsToMyCart,removetoCart,DeleteMyCart } = MyCartSlice.actions;
export default MyCartSlice.reducer;