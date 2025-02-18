import { createSlice } from "@reduxjs/toolkit";



const ColorSlice = createSlice({
    name:"mycolor",
    initialState:{
        color:"pink"
    },
    reducers:{
        Mybgcolor:(state,actions)=>{
            console.log(actions);
            state.color = actions.payload;

        }
    }
})

export const {Mybgcolor}= ColorSlice.actions;
export default ColorSlice.reducer;