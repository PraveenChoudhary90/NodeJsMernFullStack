import { createSlice } from "@reduxjs/toolkit";

const myColor = createSlice({
    name:"mycolor",
    initialState:{
        bgcolor:"pink"
    },
    reducers:{
        Mybgcolor:(state)=>{
            state.bgcolor="blue";
        }
    }
    
})

export const {Mybgcolor}=myColor.actions;
export default myColor.reducer;