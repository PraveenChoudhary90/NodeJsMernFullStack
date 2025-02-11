import { createSlice } from "@reduxjs/toolkit";

const Mycolor = createSlice({
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

export const {Mybgcolor} = Mycolor.actions;
export default Mycolor.reducer;