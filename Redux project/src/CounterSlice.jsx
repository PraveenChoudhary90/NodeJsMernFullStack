import { createSlice } from "@reduxjs/toolkit";
const counterSice = createSlice({
    name:"mycount",
    initialState:{
        count:0,
        color:"yellow"
    },
    reducers:{
        increment:(state)=>{
            state.count =state.count+1;//state.count++
        },
        decrement:(state)=>{
            state.count = state.count-1; //state.count--
        },
         Mybgcolor:(state)=>{
            state.color="blue";
         }
    }
})
 export const {increment,decrement,Mybgcolor}=counterSice.actions;
 export default counterSice.reducer;