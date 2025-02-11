import { createSlice } from "@reduxjs/toolkit";
const counterSice = createSlice({
    name:"mycount",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count =state.count+1;//state.count++
        },
        decrement:(state)=>{
            state.count = state.count-1; //state.count--
        }
    }
})
 export const {increment,decrement}=counterSice.actions;
 export default counterSice.reducer;