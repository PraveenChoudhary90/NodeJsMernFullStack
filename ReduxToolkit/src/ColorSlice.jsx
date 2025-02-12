import { createSlice } from "@reduxjs/toolkit"

const mycolor = createSlice({
    name:"mycolor",
    initialState:{
        color:"yellow"
    },
    reducers:{
        MyChnage:(state,actions)=>{
            console.log(actions);
            state.color=actions.payload;
        }
    }
})

export const {MyChnage}= mycolor.actions;
export default mycolor.reducer;